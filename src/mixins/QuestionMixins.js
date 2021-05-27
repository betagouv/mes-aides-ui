import { returnStringOrExecuteFunction } from "@/lib/Step"

export const createQuestionMixin = () => {
  return {
    computed: {
      enSavoirPlus: function () {
        return returnStringOrExecuteFunction(
          this.question,
          "enSavoirPlus",
          this
        )
      },
      hasQuestionError: function () {
        return this.questionError !== undefined
      },
    },
    data: function () {
      return {
        value: undefined,
        questionError: undefined,
      }
    },
  }
}
