<script setup lang="ts">
import IconLogo from '~/assets/IconLogo.vue';
const user = ref({
    username: '',
    password: '',
});

const login = async () => {
    // TODO send user Data to the login endpoint and redirect if  successful 
};

</script>

<template>
    <div class="background" style="width: 100%; height: 100%; min-height:1000px; display: flex; justify-content: center;">
        <!-- <Dialog>
            <slot>
                <div class="title">
                    <h2>Login</h2>
                </div>
                <div class="container form">
                    <label for="uname"><b>Username</b></label>
                    <input v-model="user.username" type="text" class="input" placeholder="Enter Username" name="uname"
                        required />

                    <label for="psw"><b>Password</b></label>
                    <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw"
                        required />

                    <button @click.prevent="login" class="button">Login</button>
                </div>
            </slot>
        </Dialog> -->
        <div class="dialog-container" style="display: flex; flex-direction: column; gap: 20px;">
            <IconLogo style="margin: auto;" />
            <div class="title">
                <h2>Logowanie</h2>
            </div>
                <div>
                    <label for="uname"><b>Login</b></label>
                    <input v-model="user.username" type="text" class="input" placeholder="Enter Username" name="uname"
                        required />
                </div>

                <div>
                    <label for="psw"><b>Hasło</b></label>
                    <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw"
                        required />
                </div>

            <button @click.prevent="login" class="button">Login</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dialog-container {
    border-radius: 50px;
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