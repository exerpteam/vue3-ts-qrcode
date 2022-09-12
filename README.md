Based on https://github.com/scholtz/qrcode-vue3


import like so in the component you want to use it in:

    import QRCode from 'vue3-ts-qrcode/src/components/QRCode.vue';

    @Options({
        props: {},
        components: {
            QRCode
        },
    })
    export default class BringAFriend extends Vue {


and in package.json:

    "dependencies": {
        "vue3-ts-qrcode": "https://github.com/exerpteam/vue3-ts-qrcode",
    }