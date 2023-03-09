const yesBtn = document.querySelector(`#yesBtn`);

yesBtn.addEventListener(`click`,function() {
    alert(`Gracias por aceptar 😊👌. Mi cvu es 0000003100084588664667`)
    location.href ="https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gclid=Cj0KCQiApKagBhC1ARIsAFc7Mc5BvBIM7inv5smVXrrzc0t4euGeQ5Bo71UstS0zJ6-mFHtpALDVpqQaAldlEALw_wcB"
});

const noBtn = document.querySelector(`#noBtn`);

noBtn.addEventListener(`mouseover`,function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty(`top`,randomY+`%`);
    noBtn.style.setProperty(`left`,randomX+`%`);
    noBtn.style.setProperty(`trasnform`,`translate(-${randomX}%,-${randomY}%`);
})