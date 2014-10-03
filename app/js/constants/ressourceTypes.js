'use strict';

angular.module('ddsApp').constant('ressourceTypes', [
    {
        id: 'revenusSalarie',
        label: 'Salaires, primes',
        category: 'revenusActivite'
    },
    {
        id: 'stage',
        label: 'Rémunération de stage',
        category: 'revenusActivite'
    },
    {
        id: 'revenusStageFormationPro',
        label: 'Revenus de stage de formation professionnelle',
        category: 'revenusActivite'
    },
    {
        id: 'allocationsChomage',
        label: 'Allocation chômage (ARE)',
        category: 'allocations'
    },
    {
        id: 'allocationSecurisationPro',
        label: 'Allocation de sécurisation professionnelle',
        category: 'allocations'
    },
    {
        id: 'primeRepriseActivite',
        label: 'Prime forfaitaire mensuelle pour la reprise d’activité',
        category: 'allocations'
    },
    {
        id: 'allocationLogement',
        label: 'Aide au logement',
        category: 'allocations'
    },
    {
        id: 'rsa',
        label: 'Revenu de solidarité active (RSA)',
        category: 'allocations'
    },
    {
        id: 'asf',
        label: 'Allocation de soutien familial (ASF)',
        category: 'allocations'
    },
    {
        id: 'aspa',
        label: 'Allocation de solidarité aux personnes âgées (ASPA)',
        category: 'allocations'
    },
    {
        id: 'ass',
        label: 'Allocation de solidarité spécifique (ASS)',
        category: 'allocations'
    },
    {
        id: 'aah',
        label: 'Allocation adulte handicapé (AAH)',
        category: 'allocations'
    },
    {
        id: 'indJourMaternite',
        label: 'Indemnités de maternité, paternité, adoption',
        category: 'indemnites'
    },
    {
        id: 'indJourMaladie',
        label: 'Indemnités maladie',
        category: 'indemnites'
    },
    {
        id: 'indJourMaladieProf',
        label: 'Indemnités maladie professionnelle',
        category: 'indemnites'
    },
    {
        id: 'indJourAccidentDuTravail',
        label: 'Indemnités d’accident du travail',
        category: 'indemnites'
    },
    {
        id: 'indChomagePartiel',
        label: 'Indemnités de chômage partiel',
        category: 'indemnites'
    },
    {
        id: 'indVolontariat',
        label: 'Indemnités de volontariat',
        category: 'indemnites'
    },
    {
        id: 'dedommagementAmiante',
        label: 'Dédommagement aux victimes de l’amiante',
        category: 'indemnites'
    },
    {
        id: 'pensionsAlimentaires',
        label: 'Pensions alimentaires',
        category: 'pensions'
    },
    {
        id: 'prestationCompensatoire',
        label: 'Prestation compensatoire (suite à séparation)',
        category: 'pensions'
    },
    {
        id: 'pensionsRetraitesRentes',
        label: 'Retraite (y compris reversion), rentes',
        category: 'pensions'
    },
    {
        id: 'retraiteCombattant',
        label: 'Retraite du combattant',
        category: 'pensions'
    },
    {
        id: 'pensionsInvalidite',
        label: 'Pensions d\'invalidité',
        category: 'pensions'
    },
    {
        id: 'bourseEnseignementSup',
        label: 'Bourses de l\'enseignement supérieur',
        category: 'autre'
    },
    {
        id: 'bourseRecherche',
        label: 'Bourse de recherche',
        category: 'autre'
    },
    {
        id: 'gainsExceptionnels',
        label: 'Gains exceptionnels (dons, gains aux jeux, héritage)',
        category: 'autre'
    },
    {
        id: 'caMicroEntreprise',
        label: 'Micro-entreprise / auto-entrepreneur',
        category: 'tns'
    },
    {
        id: 'autresRevenusTns',
        label: 'Autres revenus non salariés',
        category: 'tns'
    }
]);
