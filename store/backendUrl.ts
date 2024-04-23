import { defineStore } from 'pinia'

export const useBackendUrlStore = defineStore('backendUrl', {
    state: () => {
        return { url: "https://flatpred-backend.dev.codepred.pl/" }
    }
})