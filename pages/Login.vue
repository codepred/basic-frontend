<script setup lang="ts">
import IconLogo from '~/assets/IconLogo.vue';
import * as yup from 'yup';
import { useBackendUrlStore } from '../store/backendUrl'
import { useForm } from 'vee-validate';

const user = ref({
    username: '',
    password: '',
});

const backendUrl = useBackendUrlStore()

const { isSubmitting } = useForm();

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
});

async function onSubmit(values: any): void {
}

function handleError(values: any) {
    // test
}

</script>

<template>
    <div class="background"
        style="width: 100%; height: 100%; min-height:1000px; display: flex; justify-content: center;">
        <div class="dialog-container">
            <div>
                <IconLogo style="margin: auto; width: 100%;" />
            </div>
            <div class="title">
                <h2>Logowanie</h2>
            </div>
            <VeeForm ref="registrationForm" @submit="onSubmit" @invalid-submit="handleError" :validation-schema="schema"
                style="display: flex; flex-direction: column; gap: 10px;">
                <VeeField name="email" type="email" rules="required|email" />
                <VeeErrorMessage :custom-messages="{ required: 'test' }" name="email" />
                <VeeField name="password" type="password" />
                <VeeErrorMessage name="password" />
                <button class="button"> {{ isSubmitting ? "Logowanie..." : "Zaloguj" }} </button>
            </VeeForm>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dialog-container {
    border-radius: 20px;
    padding-right: clamp(16px, 10%, 56px);
    padding-left: clamp(16px, 10%, 56px);
    padding-top: clamp(16px, 10%, 48px);
    padding-bottom: clamp(16px, 10%, 48px);
    top: 150px;
    min-height: 200px;
    height: fit-content;
    max-height: 800px;
    min-width: 350px;
    width: 50%;
    max-width: 600px;
    overflow-y: auto;
    left: 0;
    right: 0;
    color: white;
    text-align: left;
    background: white;
}

button {
    align-items: center;
    padding: 12px 24px;
    width: 100%;
    height: 46px;
    background: #E0C16E;
    border-radius: 6px;
    color: white;
    border: 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    &.action {
        background: #565751;
        width: fit-content;
        display: flex;
        gap: 5px;

        &.active {}
    }

    &.secondary {
        background: transparent;
        color: #a5a89d;
    }

    &.preview-button {
        background: white;
        // color: $color-primary-green;
        border: 1px solid goldenrod;
    }

    &:disabled {
        background: #eeeeee !important;
        cursor: default;
    }
}

.background {
    background-image: url('../assets/IconBackground.jpg');
}
</style>