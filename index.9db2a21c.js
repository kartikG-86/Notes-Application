!function(){"use strict";let e=document.querySelector(".btn"),t=(document.querySelector(".Notes"),document.querySelector(".Notes-container")),a=0,n=document.querySelector(".Delete"),o=(document.querySelector(".fa-trash-o"),document.querySelector(".fa-check-square-o"),[]);e.addEventListener("click",(function(e){e.preventDefault(),a++;let n=`\n    <div class="note" data-note = ${a}>\n    <i class="fa fa-check-square-o"></i>\n    <i class="fa fa-remove"></i>\n    <i class="fa fa-trash-o"></i>\n    <textarea name="note" class="Notes " cols="20" rows="9"></textarea>\n    \n    </div>\n    `;t.insertAdjacentHTML("beforeend",n)})),n.addEventListener("click",(function(e){e.preventDefault(),localStorage.removeItem("Note"),t.innerHTML="",o=[]}));let s=function(e){localStorage.setItem("Note",JSON.stringify(e))};document.addEventListener("click",(function(e){if(e.target.classList.contains("fa-trash-o")){e.target.closest(".note").classList.add("hidden");let t=e.target.closest(".note").getAttribute("data-note");console.log(t);let a=o.filter(((e,a)=>a!==Number(t)));console.log(a),s(a)}if(e.target.classList.contains("fa-remove")&&(e.target.closest(".note").lastElementChild.value=""),e.target.classList.contains("fa-check-square-o")){let t=e.target.closest(".note").lastElementChild.value;o.push(t),s(o)}})),window.addEventListener("load",(function(){let e=JSON.parse(localStorage.getItem("Note"));e.forEach(((a,n)=>{let s=`\n        <div class="note" data-note = ${n}>\n        <i class="fa fa-check-square-o"></i>\n        <i class="fa fa-remove"></i>\n        <i class="fa fa-trash-o"></i>\n        <textarea name="note" class="Notes " cols="20" rows="9">${a}</textarea>\n        \n        </div>\n        `;console.log(e),o=e,t.insertAdjacentHTML("beforeend",s)}))}))}();
//# sourceMappingURL=index.9db2a21c.js.map