const { Component, Mixin } = Shopware;
import template from './bunnycdn-api-test-button.html.twig';

Component.register('bunnycdn-api-test-button', {
    template,

    props: ['label'],
    inject: ['bunnycdnApiTest'],

    mixins: [
        Mixin.getByName('notification')
    ],

    created() {
        this.checkAndHideSetting();
    },

    updated() {
        this.checkAndHideSetting();
    },

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
        };
    },

    computed: {
        pluginConfig() {
            return this.$parent.$parent.$parent.actualConfigData.null;
        }
    },

    methods: {
        checkAndHideSetting() {
            const fields = document.querySelectorAll('input[name^="FroshPlatformBunnycdnMediaStorage.config"]');

            if (this.$parent.$parent.$parent.currentSalesChannelId) {
                fields.forEach(el => {
                    el.setAttribute('disabled', 'disabled');
                });
            } else {
                fields.forEach(el => {
                    el.removeAttribute('disabled');
                });
            }
        },

        saveFinish() {
            this.isSaveSuccessful = false;
        },

        check() {
            this.isLoading = true;
            this.bunnycdnApiTest.check(this.pluginConfig).then((res) => {
                if (res.success) {
                    this.isSaveSuccessful = true;
                    this.createNotificationSuccess({
                        title: this.$tc('bunnycdn-api-test-button.title'),
                        message: this.$tc('bunnycdn-api-test-button.success')
                    });
                } else {
                    this.createNotificationError({
                        title: this.$tc('bunnycdn-api-test-button.title'),
                        message: this.$tc('bunnycdn-api-test-button.error')
                    });
                }

                setTimeout(() => {this.isLoading = false;},2500);
            });
        }
    }
})
