(this.webpackJsonp=this.webpackJsonp||[]).push([["frosh-platform-bunnycdn-media-storage"],{EEnM:function(e,t,n){"use strict";n.r(t);n("NoYw");var s=n("RbR4"),i=n.n(s);const{Component:c,Mixin:o}=Shopware;c.register("bunnycdn-api-test-button",{template:i.a,props:["label"],inject:["bunnycdnApiTest"],mixins:[o.getByName("notification")],created(){this.checkAndHideSetting()},updated(){this.checkAndHideSetting()},data:()=>({isLoading:!1,isSaveSuccessful:!1}),computed:{pluginConfig(){return this.$parent.$parent.$parent.actualConfigData.null}},methods:{checkAndHideSetting(){const e=document.querySelectorAll('input[name^="FroshPlatformBunnycdnMediaStorage.config"]');this.$parent.$parent.$parent.currentSalesChannelId?e.forEach(e=>{e.setAttribute("disabled","disabled")}):e.forEach(e=>{e.removeAttribute("disabled")})},saveFinish(){this.isSaveSuccessful=!1},check(){this.isLoading=!0,this.bunnycdnApiTest.check(this.pluginConfig).then(e=>{e.success?(this.isSaveSuccessful=!0,this.createNotificationSuccess({title:this.$tc("bunnycdn-api-test-button.title"),message:this.$tc("bunnycdn-api-test-button.success")})):this.createNotificationError({title:this.$tc("bunnycdn-api-test-button.title"),message:this.$tc("bunnycdn-api-test-button.error")}),setTimeout(()=>{this.isLoading=!1},2500)})}}});var a=n("mkHF"),r=n("xf34");Shopware.Locale.extend("de-DE",a),Shopware.Locale.extend("en-GB",r)},NoYw:function(e,t){const n=Shopware.Classes.ApiService,{Application:s}=Shopware;class i extends n{constructor(e,t,n="bunnycdn-api-test"){super(e,t,n)}check(e){const t=this.getBasicHeaders({});return this.httpClient.post(`_action/${this.getApiBasePath()}/check`,e,{headers:t}).then(e=>n.handleResponse(e))}}s.addServiceProvider("bunnycdnApiTest",e=>{const t=s.getContainer("init");return new i(t.httpClient,e.loginService)})},RbR4:function(e,t){e.exports='<div>\n    <sw-button-process\n        :isLoading="isLoading"\n        :processSuccess="isSaveSuccessful"\n        @process-finish="saveFinish"\n        @click="check"\n    >{{ label }}</sw-button-process>\n</div>\n'},mkHF:function(e){e.exports=JSON.parse('{"bunnycdn-api-test-button":{"title":"API Test","success":"Verbindung wurde erfolgreich getestet","error":"Verbindung konnte nicht hergestellt werden. Bitte prüfe die Konfiguration."}}')},xf34:function(e){e.exports=JSON.parse('{"bunnycdn-api-test-button":{"title":"API Test","success":"Connection was successfully tested","error":"Connection could not be established. Please check the config."}}')}},[["EEnM","runtime"]]]);