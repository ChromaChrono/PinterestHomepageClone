import{_ as y,d as i,a as _,r as c,o,c as t,b as n,e as a,f as B,t as s,w as C,T as F,n as l,g as I,p as f,h as g}from"./index-e767584d.js";const T=i(()=>_(()=>import("./AppBtnRow-2c61e8e2.js"),["assets/AppBtnRow-2c61e8e2.js","assets/index-e767584d.js","assets/index-ceab44af.css","assets/AppBtnRow-88c74e09.css"])),b=i(()=>_(()=>import("./TheGalleryValleyAnimated_7x2-3b45224c.js"),["assets/TheGalleryValleyAnimated_7x2-3b45224c.js","assets/index-e767584d.js","assets/index-ceab44af.css","assets/TheGalleryValleyAnimated_7x2-f3607896.css"])),k=i(()=>_(()=>import("./TheBanner-75191270.js"),["assets/TheBanner-75191270.js","assets/AppButtonRound-ca8aa5e7.js","assets/index-e767584d.js","assets/index-ceab44af.css","assets/AppButtonRound-79698199.css","assets/TheBanner-e6ead02c.css"])),E=i(()=>_(()=>import("./TheHeader-20109eed.js"),["assets/TheHeader-20109eed.js","assets/badgeRGB-3c4165af.js","assets/index-e767584d.js","assets/index-ceab44af.css","assets/TheHeader-e5cbe275.css"])),A={components:{BtnRow:T,Gallery:b,Banner:k,AppHeader:E},data(){return{currentFrame:0,colors:["#c28B00","#61867b","#0076d3","#407a57"],time2Change:6e3}},methods:{loadNextTitle(){this.currentFrame<3?this.currentFrame+=1:this.currentFrame=0},handleInteraction(){this.$emit("bannerClicked")},changeSlide(r){clearInterval(this.interval),this.currentFrame=r,this.interval=this.createInterval()},createInterval(){return setInterval(()=>{this.loadNextTitle()},this.time2Change)}},created(){this.interval=this.createInterval}},u=r=>(f("data-v-0ebb52ae"),r=r(),g(),r),V={class:"hero"},R={class:"hero__heading"},S=u(()=>a("br",null,null,-1)),w={class:"hero-gallery-container"},N=u(()=>a("div",{class:"overlay"},null,-1));function O(r,D,H,P,e,h){const d=c("AppHeader"),m=c("BtnRow"),p=c("Gallery"),v=c("Banner");return o(),t("div",V,[n(d),a("div",R,[a("h2",null,[B(s(r.$t("hero.header-top"))+" ",1),S,n(F,{name:"slide-out-in",mode:"out-in"},{default:C(()=>[e.currentFrame===0?(o(),t("span",{key:0,style:l({color:e.colors[0]})},s(r.$t("hero.header-look")),5)):e.currentFrame===1?(o(),t("span",{key:1,style:l({color:e.colors[1]})},s(r.$t("hero.header-art")),5)):e.currentFrame===2?(o(),t("span",{key:2,style:l({color:e.colors[2]})},s(r.$t("hero.header-food")),5)):e.currentFrame===3?(o(),t("span",{key:3,style:l({color:e.colors[3]})},s(r.$t("hero.header-travel")),5)):I("",!0)]),_:1})])]),n(m,{onBtnChange:h.changeSlide,currentBtn:e.currentFrame,currentColor:e.colors[e.currentFrame]},null,8,["onBtnChange","currentBtn","currentColor"]),a("div",w,[N,n(p,{currentFrame:e.currentFrame},null,8,["currentFrame"])]),n(v,{onBannerClicked:h.handleInteraction,backgroundColor:e.colors[e.currentFrame]},null,8,["onBannerClicked","backgroundColor"])])}const x=y(A,[["render",O],["__scopeId","data-v-0ebb52ae"]]);export{x as default};
//# sourceMappingURL=TheHero-bbd18722.js.map