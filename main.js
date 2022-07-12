window.addEventListener("load",(function(){var totalSellerCostsEl=document.querySelector(".total-seller-costs"),totalBuyerCostsEl=document.querySelector(".total-buyer-costs"),totalOwnerCostsEl=document.querySelector(".total-owner-costs"),netSellerProceedsEl=document.querySelector(".net-seller-proceeds"),addCustomExpenseBtn=document.querySelector(".add-custom-expense"),customExpenseForm=document.querySelector(".custom-expense-form"),customExpenseTitle=document.querySelector("#additional-expense-name"),customExpenseValue=document.querySelector("#additional-expense-value"),paidByRadioBtns=document.querySelectorAll(".paid-by__radio-button"),deleteExpenseBtn=document.querySelector(".delete-custom-expense"),customCostsResults=document.querySelector(".custom-costs"),saveExpenseBtn=document.querySelector(".save-custom-expense"),cancelExpenseBtn=document.querySelector(".cancel-custom-expense"),updateExpenseBtn=document.querySelector(".update-custom-expense"),customCostsControlsContainer=document.querySelector(".custom-expenses-form-control"),customCostsControlOutput=document.querySelector(".custom-costs-control-wrapper"),customExpenseItems=[],key=1;function setCustomExpensePayer(e){paidByRadioBtns.forEach((function(t){t.id.includes(e)&&(t.checked=!0)}))}function editCustomeExpense(e){var t=customExpenseItems.filter((function(t){return t.keyId===e}));customExpenseTitle.value=t[0].feeDescription,t[0].paidBySeller?customExpenseValue.value=t[0].paidBySeller.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}):t[0].paidByBuyer?customExpenseValue.value=t[0].paidByBuyer.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}):t[0].paidByOwner&&(customExpenseValue.value=t[0].paidByOwner.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})),paidByRadioBtns.forEach((function(e){e.id===t[0].paidBy&&(e.checked=!0)})),customExpenseForm.classList.add("update-form"),customExpenseForm.setAttribute("data-key",t[0].keyId),customExpenseForm.style.display="block",calculateAllCosts()}function deleteCustomeExpense(e){renderCustomExpenses(customExpenseItems=customExpenseItems.filter((function(t){return t.keyId!==e}))),renderCustomExpenseControl(customExpenseItems),calculateAllCosts()}function renderExpense(e){var t="";e.paidBySeller&&e.paidByBuyer?t=`<div class="cost-group__cost ${e.keyId}">\n<div class="cost-group__title-wrapper">\n<div class="cost-group__cost-title">${e.feeDescription}</div>\n</div>\n<div class="cost-group__cost-wrapper seller">\n<div class="cost-group__cost-amount seller-cost-wrapper">$<span class="seller-cost">${e.paidBySeller.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</span></div>\n</div>\n<div class="cost-group__cost-wrapper buyer">\n<div class="cost-group__cost-amount buyer-cost-wrapper">$<span class="buyer-cost">${e.paidByBuyer.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</span></div>\n</div>\n</div>`:e.paidBySeller?t=`<div class="cost-group__cost ${e.keyId}">\n<div class="cost-group__title-wrapper">\n<div class="cost-group__cost-title">${e.feeDescription}</div>\n</div>\n<div class="cost-group__cost-wrapper seller">\n<div class="cost-group__cost-amount seller-cost-wrapper">$<span class="seller-cost">${e.paidBySeller.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</span></div>\n</div>\n<div class="cost-group__cost-wrapper buyer">\n<div class="cost-group__cost-amount buyer-cost-wrapper">$0</div>\n</div>\n</div>`:e.paidByBuyer?t=`<div class="cost-group__cost ${e.keyId}">\n<div class="cost-group__title-wrapper">\n<div class="cost-group__cost-title">${e.feeDescription}</div>\n</div>\n<div class="cost-group__cost-wrapper seller">\n<div class="cost-group__cost-amount seller-cost-wrapper">$0</div>\n</div>\n<div class="cost-group__cost-wrapper buyer">\n<div class="cost-group__cost-amount buyer-cost-wrapper">$<span class="buyer-cost">${e.paidByBuyer.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</span></div>\n</div>\n</div>`:e.paidByOwner&&(t=`<div class="cost-group__cost ${e.keyId}">\n<div class="cost-group__title-wrapper">\n<div class="cost-group__cost-title">${e.feeDescription}</div>\n</div>            \n<div class="cost-group__cost-wrapper owner block">\n<div class="cost-group__cost-amount owner-cost-wrapper">$<span class="owner-cost">${e.paidByOwner.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</span></div>\n</div>\n</div>`);var n=document.querySelector(e.targetClass);(e=document.createElement("div")).innerHTML=t,n.appendChild(e)}function renderCustomExpenses(e){customCostsResults.innerHTML="",e.forEach((function(e){renderExpense(e)}))}function renderCustomExpenseControl(e){customCostsControlOutput.innerHTML="",0<e.length?customCostsControlsContainer.style.display="block":0===e.length&&(customCostsControlsContainer.style.display="none"),e.forEach((function(e){var t="";e.paidBySeller?t=`<div class="custom-expenses-form-control-item" id="${e.keyId}">\n  <div class="custom-expenses-title">${e.feeDescription}</div>\n  <div class="custom-expenses-amount">$${e.paidBySeller.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</div>\n  <div class="custom-expenses-amount">--</div>\n  <div class="aligner">\n  <a onclick="editCustomeExpense('${e.keyId}')" class="custom-expenses-edit w-inline-block"><img src="https://uploads-ssl.webflow.com/60cbe5ccea9fa161ea3e1b9b/60f005acb39a8f5c266b0d65_Edit.svg" loading="lazy" alt="" class="edit-icon"></a>\n  <a onclick="deleteCustomeExpense('${e.keyId}')" class="custom-expenses-delete w-inline-block"><img src="https://uploads-ssl.webflow.com/60cbe5ccea9fa161ea3e1b9b/60f005beb23abeee2a534b56_Delete.svg" loading="lazy" alt="" class="delete-icon"></a>\n  </div>\n  </div>`:e.paidByBuyer?t=`<div class="custom-expenses-form-control-item" id="${e.keyId}">\n  <div class="custom-expenses-title">${e.feeDescription}</div>\n  <div class="custom-expenses-amount">--</div>\n  <div class="custom-expenses-amount">$${e.paidByBuyer.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</div>\n  <div class="aligner">\n  <a onclick="editCustomeExpense('${e.keyId}')" class="custom-expenses-edit w-inline-block"><img src="https://uploads-ssl.webflow.com/60cbe5ccea9fa161ea3e1b9b/60f005acb39a8f5c266b0d65_Edit.svg" loading="lazy" alt="" class="edit-icon"></a>\n  <a onclick="deleteCustomeExpense('${e.keyId}')" class="custom-expenses-delete w-inline-block"><img src="https://uploads-ssl.webflow.com/60cbe5ccea9fa161ea3e1b9b/60f005beb23abeee2a534b56_Delete.svg" loading="lazy" alt="" class="delete-icon"></a>\n  </div>\n  </div>`:e.paidByOwner&&(t=`<div class="custom-expenses-form-control-item" id="${e.keyId}">\n  <div class="custom-expenses-title">${e.feeDescription}</div>\n  <div class="custom-expenses-amount">$${e.paidByOwner.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}</div>\n  <div class="aligner">\n  <a onclick="editCustomeExpense('${e.keyId}')" class="custom-expenses-edit w-inline-block"><img src="https://uploads-ssl.webflow.com/60cbe5ccea9fa161ea3e1b9b/60f005acb39a8f5c266b0d65_Edit.svg" loading="lazy" alt="" class="edit-icon"></a>\n  <a onclick="deleteCustomeExpense('${e.keyId}')" class="custom-expenses-delete w-inline-block"><img src="https://uploads-ssl.webflow.com/60cbe5ccea9fa161ea3e1b9b/60f005beb23abeee2a534b56_Delete.svg" loading="lazy" alt="" class="delete-icon"></a>\n  </div>\n  </div>`),(e=document.createElement("div")).innerHTML=t,customCostsControlOutput.appendChild(e)}))}function calculateAllCosts(){var e=document.querySelectorAll(".cost-group__cost-wrapper"),t=0,n=0,o=0;e.forEach((function(e){var s=e.querySelector(".seller-cost"),a=e.querySelector(".buyer-cost");e=e.querySelector(".owner-cost"),s?isNaN(Number(s.textContent.replaceAll(",","")))||(t+=Number(s.textContent.replaceAll(",",""))):a?isNaN(Number(a.textContent.replaceAll(",","")))||(n+=Number(a.textContent.replaceAll(",",""))):e&&(isNaN(Number(e.textContent.replaceAll(",","")))||(o+=Number(e.textContent.replaceAll(",",""))))})),totalSellerCostsEl.textContent=t.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}),totalBuyerCostsEl.textContent=n.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}),totalOwnerCostsEl.textContent=o.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}),e=Number(document.querySelector("#sale-price").value.replaceAll(",",""))-t,netSellerProceedsEl.textContent=e.toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})}function e(e){e&&e.classList.remove("download-pdf-active")}function t(e){e&&e.classList.add("download-pdf-active")}function getFileName(date){return`${date.toLocaleDateString().replace(/[\/\.]/g,"-")}_${date.toLocaleTimeString().replace(/:/g,"-").replace(/[\s\.]/g,"")}`}function o(){V.forEach((function(e){e.style.display="flex"}))}function s(){k.forEach((function(e){e.style.display="flex"})),L.forEach((function(e){e.style.display="flex"})),N.forEach((function(e){e.style.display="flex"})),F.forEach((function(e){e.style.display="flex"})),T.forEach((function(e){e.style.display="none"}))}function a(){R.style.display="none",z.forEach((function(e){e.style.opacity="0",setTimeout((function(){e.style.display="none",e.style.opacity="1"}),800)})),W.forEach((function(e){e.style.opacity="1"})),H.forEach((function(e){e.style.display="none"})),j.style.opacity="1",Y.style.opacity="1"}function r(e){"sales-with-mortgage"===e?(s(),$.classList.remove("for-owner"),renderCustomExpenses(customExpenseItems=[]),renderCustomExpenseControl(customExpenseItems)):"sales-with-cash"===e?(s(),k.forEach((function(e){e.style.display="none"})),$.classList.remove("for-owner"),renderCustomExpenses(customExpenseItems=[]),renderCustomExpenseControl(customExpenseItems)):"refinance"===e&&(s(),L.forEach((function(e){e.style.display="none"})),F.forEach((function(e){e.style.display="none"})),N.forEach((function(e){e.style.display="none"})),T.forEach((function(e){e.style.display="flex"})),$.classList.add("for-owner"),renderCustomExpenses(customExpenseItems=[]),renderCustomExpenseControl(customExpenseItems))}function c(){var e=b.value.replaceAll(",",""),t=h.value.replaceAll(",",""),n=C.value.replaceAll(",","");E.checked?U&&0<Number(e)&&0<Number(t)&&Number(t)<=Number(e)&&0<=Number(n)&&Number(n)<=100?w.disabled=!1:w.disabled=!0:x.checked?U&&0<Number(e)?w.disabled=!1:w.disabled=!0:S.checked&&(U&&0<Number(t)?w.disabled=!1:w.disabled=!0)}function l(e){A.forEach((function(t){t.querySelectorAll("input").forEach((function(t){t.disabled="enable"!==e}))}))}function i(e){var t=f+"/validate-address",n=new Headers;n.append("Content-Type","application/json"),n.append("X-API-KEY","BdbtnilW4WHxtYLHq5zgUn21YI4hyNzGShfVPwU6kd22cKDKygRdyvLarwGkSR4VTeqmPATvaou"),e={method:"POST",headers:n,body:JSON.stringify(e)},e=new Request(t,e),fetch(e).then(e=>e.json()).then(e=>{(ne=e).statusCode?d(ne.message):(re.style.display="none",ae.style.borderColor="#A2A2A2",se.style.color="#858585",U=!0,c())})}function u(n){bUrl=f+"/rates";var o=new Headers;o.append("Content-Type","application/json"),o.append("X-API-KEY","BdbtnilW4WHxtYLHq5zgUn21YI4hyNzGShfVPwU6kd22cKDKygRdyvLarwGkSR4VTeqmPATvaou"),n={method:"POST",headers:o,body:JSON.stringify(n)},e(g),R.style.display="flex",z.forEach((function(e){e.style.display="block"})),H.forEach((function(e){e.style.display="block",e.style.opacity="0",e.style.pointerEvents="none"})),W.forEach((function(e){e.style.opacity="0"})),j.style.opacity="0",Y.style.opacity="0",n=new Request(bUrl,n),fetch(n).then(e=>{if(e.ok)return e.json();throw new Error("")}).then(e=>{ne=e,function(){var e="",t="",n=0,o=0,s=0,a=0;for(var[r,c]of Object.entries(ne))for(var[l,i]of("Owner's Title Insurance"===r?e=".owners-title-insurance":"Lender's Title Insurance"===r?e=".lenders-title-insurance":"Taxes and other Government Fees Section"===r?e=".taxes-government-fees":"Settlement/Escrow"===r&&(e=".settlement-escrow"),Object.entries(c)))for(var[u,d]of(t=i.feeDescription,Object.entries(i)))if("payments"==u){for(var[m,p]of Object.entries(d))"Seller"==p.feePaidBy?n=p.feeAmount:S.checked&&"Buyer"==p.feePaidBy?s=p.feeAmount:"Buyer"==p.feePaidBy&&(o=p.feeAmount);renderExpense({targetClass:e,feeDescription:t,paidBySeller:n,paidByBuyer:o,paidByOwner:s,keyId:a}),s=o=n=0,a++}M.forEach((function(e){e.querySelectorAll(".cost-group__cost").length?e.closest(".cost-group__wrapper").style.display="flex":e.closest(".cost-group__wrapper").style.display="none"})),calculateAllCosts()}(),ce.style.display="none",t(g),a()}).catch(e=>{ce.style.display="flex",a()})}function d(e){ae.style.borderColor="#ED5564",se.style.color="#ED5564",re.style.display="block",re.innerHTML=e||'Sorry, Endpoint is only available in these <a class="property-error-link" href="/licenses#counties">select locations</a>',U=!1,c()}function m(){te={};var e,t,n,o,s=oe.getPlace();s.address_components?(ee.innerHTML=s.adr_address,e=ee.querySelector(".street-address"),t=ee.querySelector(".locality"),n=ee.querySelector(".region"),o=ee.querySelector(".postal-code"),te.street1=e?e.textContent:"",te.street2="",te.city=t?t.textContent:"",te.state=n?n.textContent:"",te.zipCode=o?o.textContent:"",(s=s.address_components.filter(e=>e.long_name.includes("County"))).length?te.county=s[0].long_name.replace(" County",""):te.county="",E.checked?te.transactionType="Sale w/ Mortgage":x.checked?te.transactionType="Sale/Cash":S.checked&&(te.transactionType="Refinance"),ae.blur(),""!==te.street1&&""!==te.city&&""!==te.state&&""!==te.zipCode?"Alameda"===te.county||"Calaveras"===te.county||"Contra Costa"===te.county||"El Dorado"===te.county||"Fresno"===te.county||"Marin"===te.county||"Merced"===te.county||"Monterey"===te.county||"Placer"===te.county||"Sacramento"===te.county||"San Francisco"===te.county||"San Joaquin"===te.county||"San Mateo"===te.county||"Santa Clara"===te.county||"Santa Cruz"===te.county||"Shasta"===te.county||"Solano"===te.county||"Sonoma"===te.county||"Yuba"===te.county||"Napa"===te.county||"Butte"===te.county||"Glenn"===te.county||"Modoc"===te.county||"Mono"===te.county||"Nevada"===te.county||"Tehama"===te.county||"Tulare"===te.county||"Tuolumne"===te.county?d():i(te):d("We couldn't find that address. Please enter a street address, city, and state.")):(d(),c())}customExpenseTitle.addEventListener("blur",(function(e){var t=e.target.value,n=e.target.closest(".fee-calculator__input-container"),o=n.querySelector(".fee-calculator__input-label");e=n.querySelector(".fee-calculator__input"),n=n.querySelector(".form-error"),""===t?(o.style.color="#ED5564",e.style.borderColor="#ED5564",n.style.display="block"):(o.style.color="#858585",e.style.borderColor="#A2A2A2",n.style.display="none")})),addCustomExpenseBtn.addEventListener("click",(function(){customExpenseForm.style.display="block"})),deleteExpenseBtn.addEventListener("click",(function(e){e.preventDefault(),deleteCustomeExpense(customExpenseForm.dataset.key),customExpenseTitle.value="",customExpenseValue.value="",customExpenseForm.style.display="none",calculateAllCosts()})),cancelExpenseBtn.addEventListener("click",(function(e){customExpenseTitle.value="",customExpenseValue.value="",customExpenseForm.style.display="none",customExpenseForm.classList.remove("update-form")})),updateExpenseBtn.addEventListener("click",(function(e){e.preventDefault();var t,n="";for(t in paidByRadioBtns.forEach((function(e){e.checked&&(n=e.value)})),customExpenseItems)if(customExpenseItems[t].keyId==customExpenseForm.dataset.key){customExpenseItems[t].feeDescription=customExpenseTitle.value,"paid-by-seller"===n?(customExpenseItems[t].paidBySeller=Number(customExpenseValue.value.replaceAll(",","")),customExpenseItems[t].paidByBuyer=""):"paid-by-buyer"===n?(customExpenseItems[t].paidByBuyer=Number(customExpenseValue.value.replaceAll(",","")),customExpenseItems[t].paidBySeller=""):"paid-by-owner"===n&&(customExpenseItems[t].paidByOwner=Number(customExpenseValue.value.replaceAll(",",""))),customExpenseItems[t].paidBy=n;break}customExpenseTitle.value="",customExpenseValue.value="",renderCustomExpenses(customExpenseItems),renderCustomExpenseControl(customExpenseItems),customExpenseForm.style.display="none",customExpenseForm.classList.remove("update-form"),calculateAllCosts()})),saveExpenseBtn.addEventListener("click",(function(e){e.preventDefault();var t="";paidByRadioBtns.forEach((function(e){e.checked&&(t=e.value)})),""!==customExpenseTitle.value&&""!==customExpenseValue.value&&""!==t&&("paid-by-seller"===t?customExpenseItems.push({keyId:`costId-${key}`,feeDescription:customExpenseTitle.value,paidBySeller:Number(customExpenseValue.value.replaceAll(",","")),targetClass:".custom-costs",paidBy:t}):"paid-by-buyer"===t?customExpenseItems.push({keyId:`costId-${key}`,feeDescription:customExpenseTitle.value,paidByBuyer:Number(customExpenseValue.value.replaceAll(",","")),targetClass:".custom-costs",paidBy:t}):"paid-by-owner"===t&&customExpenseItems.push({keyId:`costId-${key}`,feeDescription:customExpenseTitle.value,paidByOwner:Number(customExpenseValue.value.replaceAll(",","")),targetClass:".custom-costs",paidBy:t}),key++,renderCustomExpenses(customExpenseItems),renderCustomExpenseControl(customExpenseItems),customExpenseTitle.value="",customExpenseValue.value="",customExpenseForm.style.display="none",calculateAllCosts())}));var p=document.querySelector(".fee-calculator__results-wrapper"),y=p.getBoundingClientRect().top,f="https://fee-calculator-service.endpointclosing.com";/webflow/i.test(window.location.hostname)&&(f="https://fee-calculator-service.development.endpointclosing.com"),window.addEventListener("scroll",(function(){var e;window.innerWidth<767&&((e=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop)<=y?(p.style.top=`${y-e}px`,p.style.borderColor="#c5c5c5"):(p.style.top="0px",p.style.borderColor="transparent"))}));var g=document.querySelector(".download-pdf");e(g);var v=document.querySelector(".transaction-type--container"),E=document.querySelector("#sales-with-mortgage"),x=document.querySelector("#sales-with-cash"),S=document.querySelector("#refinance"),b=(document.querySelector("#property-address"),document.querySelector("#sale-price")),h=document.querySelector("#loan-amount"),C=document.querySelector("#loan-percentage"),w=document.querySelector(".calculate-fees"),_=document.querySelectorAll("#property-form input[type=text]:not(#property-address)"),A=document.querySelectorAll(".form--disabled"),q=document.querySelectorAll(".number-input"),D=document.querySelector(".additional-expense-form"),k=document.querySelectorAll(".hide-for-cash"),B=document.querySelectorAll(".hide-for-cash-form"),L=document.querySelectorAll(".hide-for-refinance"),I=document.querySelectorAll(".hide-for-refinance-form"),N=document.querySelectorAll(".buyer"),F=document.querySelectorAll(".seller"),T=document.querySelectorAll(".owner"),$=document.querySelector(".custom-expenses-form-control"),V=document.querySelectorAll(".base-input"),O=document.querySelectorAll(".disabled-text"),U=!1,P=!1,M=document.querySelectorAll(".api-fetched-items"),R=document.querySelector(".loading-spinner__container"),z=document.querySelectorAll(".cost-data__animation-container"),H=document.querySelectorAll(".cost-data-template"),j=document.querySelector(".additional-expense__wrapper"),Y=document.querySelector(".net-proceeds__wrapper"),W=document.querySelectorAll(".total-cost");q.forEach((function(e){e.addEventListener("keyup",(function(e){var t=e.target.value.replaceAll(",","");e.preventDefault(),2<t.length&&(e.target.id.includes("percentage")?e.target.value=Number(t).toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}):e.target.value=Number(t).toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}))}))})),v.addEventListener("change",(function(e){e=e.target,P?"sales-with-mortgage"===e.id?o():"sales-with-cash"===e.id?(o(),B.forEach((function(e){e.style.display="none"}))):"refinance"===e.id&&(o(),I.forEach((function(e){e.style.display="none"}))):r(e.id),te&&te.street1&&te.city&&te.state&&te.zipCode&&("sales-with-mortgage"===e.id?te.transactionType="Sale w/ Mortgage":"sales-with-cash"===e.id?te.transactionType="Sale/Cash":"refinance"===e.id&&(te.transactionType="Refinance"),(e={}).street1=te.street1,e.street2=te.street2,e.city=te.city,e.county=te.county,e.state=te.state,e.zipCode=te.zipcode,e.transactionType=te.transactionType,"Alameda"===te.county||"Calaveras"===te.county||"Contra Costa"===te.county||"El Dorado"===te.county||"Fresno"===te.county||"Marin"===te.county||"Merced"===te.county||"Monterey"===te.county||"Placer"===te.county||"Sacramento"===te.county||"San Francisco"===te.county||"San Joaquin"===te.county||"San Mateo"===te.county||"Santa Clara"===te.county||"Santa Cruz"===te.county||"Shasta"===te.county||"Solano"===te.county||"Sonoma"===te.county||"Yuba"===te.county||"Napa"===te.county||"Butte"===te.county||"Glenn"===te.county||"Modoc"===te.county||"Mono"===te.county||"Nevada"===te.county||"Tehama"===te.county||"Tulare"===te.county||"Tuolumne"===te.county?d():i(e))})),_.forEach((function(e){e.addEventListener("keyup",(function(e){c()}))})),document.querySelector("#sales-with-mortgage").checked=!0,w.disabled=!0,l("disable"),q.forEach((function(e){e.addEventListener("keyup",(function(e){var t,n,o=e.target.value.replaceAll(",","");(e=e.target.id).includes("amount")?(t=e.replace("amount","percentage"),(n=document.querySelector(`#${t}`))&&(n.value=Number(o/b.value.replaceAll(",","")*100).toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}))):e.includes("percentage")&&(t=e.replace("percentage","amount"),(n=document.querySelector(`#${t}`))&&(n.value=Number(b.value.replaceAll(",","")*o/100).toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0})))}))})),q.forEach((function(e){e.addEventListener("keypress",(function(e){var t=e.target.value;(e.which<48||57<e.which)&&("."!==e.key||t.includes("."))&&e.preventDefault()}))})),document.querySelectorAll("input[type=text]").forEach((function(e){e.addEventListener("focus",(function(e){e.target.classList.add("in-focus")})),e.addEventListener("blur",(function(e){e.target.classList.remove("in-focus")}))}));var G=document.querySelectorAll(".input-amount");b.addEventListener("keyup",(function(e){var t=Number(e.target.value.replaceAll(",",""));G.forEach((function(e){var n;0<Number(e.value.replaceAll(",",""))&&(n=document.querySelector(`#${e.id.replace("amount","percentage")}`))&&(n.value=(Number(e.value.replaceAll(",",""))/t*100).toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}))}))})),q.forEach((function(e){e.addEventListener("keyup",(function(e){var t=e.target.value,n=e.target.closest(".fee-calculator__input-container"),o=n.querySelector(".fee-calculator__input-label");e=n.querySelectorAll(".fee-calculator__input"),n=n.querySelector(".form-error"),""===t?(o.style.color="#ED5564",e.forEach((function(e){e.style.borderColor="#ED5564"})),n.style.display="block"):(o.style.color="#858585",e.forEach((function(e){e.style.borderColor="#A2A2A2"})),n.style.display="none")}))})),q.forEach((function(e){e.addEventListener("paste",(function(e){var t=(e.clipboardData||window.clipboardData).getData("text");if(isNaN(Number(t)))e.preventDefault();else{if(!t.includes("-"))return!0;e.preventDefault(),e.target.value=t.replace("-","")}}))})),_=document.querySelectorAll(".additional-expense-form input:not(.closing-date)");var K=[];_.forEach((function(e){e.addEventListener("keyup",(function(e){targetId=e.target.id,targetId.includes("percentage")&&(targetId=targetId.replace("percentage","amount")),targetValue=document.querySelector(`#${targetId}`).value.replaceAll(",",""),e=document.querySelector(`.${targetId} .seller-cost`),0<targetValue&&Number(targetValue)<Number(b.value.replaceAll(",",""))?e.textContent=Number(targetValue).toLocaleString("en-US",{maximumFractionDigits:0,minimumFractionDigits:0}):e.textContent="0",calculateAllCosts()}))}));var J=!1,X=!1,Q=!1;_.forEach((function(e){e.addEventListener("blur",(function(e){if(targetId=e.target.id,targetId.includes("percentage")&&(targetId=targetId.replace("percentage","amount")),targetValue=document.querySelector(`#${targetId}`).value.replaceAll(",",""),targetId.includes("listing"))if(J)if(0===Number(targetValue))K=K.filter((function(e){return"Estimated Listing Agent Commissions"!==e.feeDescription})),J=!1;else for(var t in K)"Estimated Listing Agent Commissions"===K[t].feeDescription&&(K[t].paidBySeller=Number(targetValue));else 0<Number(targetValue)&&(K.push({feeDescription:"Estimated Listing Agent Commissions",paidBySeller:Number(targetValue)}),J=!0);else if(targetId.includes("selling"))if(X)if(0===Number(targetValue))K=K.filter((function(e){return"Estimated Selling Agent Commissions"!==e.feeDescription})),X=!1;else for(var t in K)"Estimated Selling Agent Commissions"===K[t].feeDescription&&(K[t].paidBySeller=Number(targetValue));else 0<Number(targetValue)&&(K.push({feeDescription:"Estimated Selling Agent Commissions",paidBySeller:Number(targetValue)}),X=!0);else if(targetId.includes("current"))if(Q)if(0===Number(targetValue))K=K.filter((function(e){return"Current Loan Payoff"!==e.feeDescription})),Q=!1;else for(var t in K)"Current Loan Payoff"===K[t].feeDescription&&(K[t].paidBySeller=Number(targetValue));else 0<Number(targetValue)&&(K.push({feeDescription:"Current Loan Payoff",paidBySeller:Number(targetValue)}),Q=!0)}))}));var Z=document.querySelector(".closing-date");Z.addEventListener("blur",(function(e){var t=e.target.value,n=e.target.closest(".fee-calculator__input-container");e=n.querySelector(".fee-calculator__input-label"),n=n.querySelector(".form-error"),""===t?(e.style.color="#ED5564",Z.style.borderColor="#ED5564",n.style.display="block"):(e.style.color="#858585",Z.style.borderColor="#A2A2A2",n.style.display="none")}));var ee=document.querySelector(".google-location-info"),te={},ne={};let oe;var se=document.querySelector(".property-label"),ae=document.querySelector("#property-address"),re=document.querySelector(".property-error");ae.addEventListener("change",(function(){c()})),ae.addEventListener("blur",(function(e){""===e.target.value&&d("Please enter an address"),c()})),ae.addEventListener("keypress",(function(e){13==e.which&&0<document.querySelectorAll(".pac-container .pac-item").length&&(google.maps.event.trigger(e.target,"keydown",{keyCode:40,hasRanOnce:!0}),google.maps.event.trigger(e.target,"keydown",{keyCode:13,hasRanOnce:!0}))}));var ce=document.querySelector(".api-call-error");document.querySelector(".api-call-error__close").addEventListener("click",(function(e){ce.style.display="none"})),w.addEventListener("click",(function(e){e.preventDefault(),e="",E.checked?(e="sales-with-mortgage",te.transactionType="Sale w/ Mortgage",te.salesAmount=Number(b.value.replaceAll(",","")),te.loanAmount=Number(h.value.replaceAll(",","")),setCustomExpensePayer("seller")):x.checked?(e="sales-with-cash",te.transactionType="Sale/Cash",te.salesAmount=Number(b.value.replaceAll(",","")),te.loanAmount=0,setCustomExpensePayer("seller")):S.checked&&(e="refinance",te.transactionType="Refinance",te.salesAmount=0,te.loanAmount=Number(h.value.replaceAll(",","")),setCustomExpensePayer("owner")),te.effectiveDate=new Date(Date.now()-60*(new Date).getTimezoneOffset()*1e3).toISOString().substring(0,10),u(te),P?(M.forEach((function(e){e.innerHTML="",e.closest(".cost-group__wrapper").style.display="block"})),r(e)):(l("enable"),D.classList.remove("form--disabled"),O.forEach((function(e){e.classList.remove("disabled-text")})),document.querySelector(".add-custom-expense--disabled").classList.remove("add-custom-expense--disabled"),P=!0),calculateAllCosts()})),oe=new google.maps.places.Autocomplete(document.getElementById("property-address"),{types:["geocode"],componentRestrictions:{country:["US"]},fields:["adr_address","address_components"]}),oe.addListener("place_changed",m),g.addEventListener("click",(function onClick(){if(g.classList.contains("download-pdf-active")){var clone=document.querySelector(".fee-calculator__results-bottom").cloneNode(!0),links=[];clone.appendChild(document.querySelector(".disclaimer-text").cloneNode(!0)),new window.jspdf.jsPDF({unit:"px",format:"a4"}).html(clone,{callback(pdf){links.forEach((function addLink(link){var url;/^\/[^\/]/.test(link.href)?((url=new URL(window.location)).pathname=link.href,url=url.toString()):/^#/.test(link.href)?((url=new URL(window.location)).hash=link.href,url=url.toString()):url=link.href,pdf.link(link.x+20,link.y+20,link.w,link.h,{url:url})})),pdf.save(`closing-cost_${getFileName(new Date)}.pdf`)},html2canvas:{ignoreElements(item){"A"===item.tagName&&links.push({href:item.href,y:item.offsetTop/1.75,x:item.offsetLeft/1.75,w:item.clientWidth/1.75,h:item.clientHeight/1.75})}},margin:20,x:0,y:0,width:400,windowWidth:700})}}))}));