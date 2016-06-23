'use strict';

angular.module('ddsApp').controller('FoyerRessourcesIndividuCtrl', function($scope, $state, $stateParams, SituationService, ressourceTypes) {

    function extractIndividuSelectedRessourceTypes (individu) {
        var result = {};
        var ressources = individu.ressources || [];
        _.chain(ressources)
            .pluck('type')
            .unique()
            .forEach(function(ressourceType) { result[ressourceType] = true; });

        ['caMicroEntreprise', 'caAutoEntrepreneur', 'revenusAgricolesTns', 'autresRevenusTns'].forEach(function(ressourceType) {
            if (individu[ressourceType]) {
                result[ressourceType] = true;
            }
        });

        return result;
    }

    function extractIndividuRessources (individu) {
        var result = [];
        var ressources = individu.ressources || [];
        var types = _.chain(ressources).pluck('type').unique().filter(function(type) {
            return ! _.contains(['pensionsAlimentairesVersees'], type);
        });

        types.forEach(function(type) {
            // on ignore les types de ressources autres que ceux déclarés dans ressourceTypes (par ex. les ressources année - 2)
            var ressourceType = _.find(ressourceTypes, { id: type });
            if (! ressourceType) {
                return;
            }
            var montantsMensuels = _.map($scope.months, function(month) {
                var ressource = _.find(ressources, { periode: month.id, type: type });
                return ressource ? Math.round(ressource.montant) : 0;
            });

            var montantAnnuel = _.chain(ressources)
                .where({ type: type })
                .pluck('montant')
                .reduce(function(sum, montant) {
                    return sum + montant;
                })
                .value();
            montantAnnuel = Math.round(montantAnnuel);

            var ressource = {
                type: ressourceType,
                montantsMensuels: montantsMensuels,
                montantAnnuel: montantAnnuel,
                onGoing: true
            };

            // For autres revenus TNS, we also need to find the CA
            if (type == 'autresRevenusTns') {
                ressource.caAnnuel = _.chain(ressources)
                    .where({ type: 'caAutresRevenusTns' })
                    .pluck('montant')
                    .reduce(function(sum, montant) {
                        return sum + montant;
                    })
                    .value();
            }

            if (_.contains(individu.interruptedRessources, type)) {
                ressource.onGoing = false;
            }
            result.push(ressource);
        });

        return result;
    }

    function getPageTitle (individu) {
        switch (individu.role) {
            case 'demandeur':
                return 'Vos ressources';
            case 'conjoint':
                return 'Les ressources de votre conjoint';
            default:
                return 'Les ressources de ' + individu.firstName;
        }
    }

    var DEFAULT_RESOURCE = {
        montantAnnuel: 0,
        caAnnuel: 0,
        montantsMensuels: [0, 0, 0],
        onGoing: true,
    };

    $scope.applySelectedRessources = function (selectedRessourceTypes, currentRessources) {
        var ressources = [];
        ressourceTypes.forEach(function(ressourceType) {
            if (! selectedRessourceTypes[ressourceType.id]) {
                return;
            }
            var ressource = _.find(currentRessources, { type: ressourceType });
            if (! ressource) {
                ressource = _.cloneDeep(DEFAULT_RESOURCE);
                ressource.type = ressourceType;
            }
            ressources.push(ressource);
        });
        $scope.ressources = ressources;
    }

    $scope.months = SituationService.getMonths($scope.situation.dateDeValeur);
    var sortedIndividus = SituationService.getIndividusSortedParentsFirst($scope.situation);
    var individuIndex = parseInt($stateParams.individu);
    $scope.individu = sortedIndividus[individuIndex];
    $scope.selectedRessourceTypes = extractIndividuSelectedRessourceTypes($scope.individu);
    $scope.ressources = extractIndividuRessources($scope.individu)
    $scope.pageTitle = getPageTitle($scope.individu);


    $scope.declareNextIndividuResources = function () {
        var nextIndividu = sortedIndividus[individuIndex + 1];
        if (! nextIndividu) {
            $scope.$emit('ressources');
            return;
        }
        if (nextIndividu.role == 'conjoint') {
            $state.go('foyer.ressources.individu.types', { individu: individuIndex + 1 });
        } else {
            $state.go('foyer.ressources.enfants');
        }
    };
});
