(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const w of n.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&a(w)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const A=o=>{let e="";for(let[l,a]of Object.entries(o.answers))if(a){const t=`${l}_correct`;a=J(a);const n=o.correct_answers[t]||"";e+=`<button class="answer-card" id="answer-button"data-type="${n}">${a}</button> `}return e},P=()=>{g&&v&&(g.innerHTML="",v.innerHTML="")},J=o=>(o=o.replace("<","&lt;").replace(">","&gt;").replace("<!--","&lt;!--").replace("-->","--&gt;").replace("'","&apos;"),o),V=async(o,e,l)=>{const a=`https://quizapi.io/api/v1/questions?apiKey=CebxaRbsf7hjjrPq74DcKVVEEaVIa7bzYz3UqxdV&difficulty=${o}&category=${e}&limit=${l}`,t=await fetch(a);if(t.ok){const n=await t.json();return console.log(n),localStorage.setItem("quiz",JSON.stringify(n)),P(),n}throw new Error(`Failed to fetch quiz with status ${t.status}`)},z=()=>{localStorage.setItem("currentQuestion",JSON.stringify(r)),localStorage.setItem("score",JSON.stringify(f)),localStorage.setItem("category",JSON.stringify(S)),localStorage.setItem("amount",JSON.stringify(p)),localStorage.setItem("difficulty",JSON.stringify(I))},Q=()=>{localStorage.removeItem("quiz"),localStorage.removeItem("score"),localStorage.removeItem("currentQuestion")},j=()=>{localStorage.removeItem("difficulty"),localStorage.removeItem("category"),localStorage.removeItem("amount")},i=document.getElementById("settings"),u=document.getElementById("quiz"),d=document.getElementById("result"),E=document.getElementById("start-button"),M=new Audio("src/audio/correct.mp3"),O=new Audio("src/audio/incorrect.mp3"),g=document.getElementById("answers"),v=document.getElementById("question"),T=document.getElementById("timer"),H=document.getElementById("questionnumber");let m=10,s=null,f=0,r=0,c="settings";const $=()=>{localStorage.getItem("quiz")!==null&&localStorage.getItem("score")!==null&&localStorage.getItem("currentQuestion")!==null&&(c="quiz",s=JSON.parse(localStorage.getItem("quiz")||""),f=parseInt(localStorage.getItem("score")||""),r=parseInt(localStorage.getItem("currentQuestion")||"")),r>0&&r>=s.length&&(c="result"),y()},y=()=>{c==="quiz"?(u==null||u.classList.remove("hidden"),i==null||i.classList.add("hidden"),d==null||d.classList.add("hidden"),B()):c==="settings"?(u==null||u.classList.add("hidden"),i==null||i.classList.remove("hidden"),d==null||d.classList.add("hidden")):c==="result"&&(u==null||u.classList.add("hidden"),i==null||i.classList.add("hidden"),d==null||d.classList.remove("hidden"),R((s==null?void 0:s.length.toString())||""))},h=document.getElementById("difficulty"),L=document.getElementById("category"),b=document.getElementById("amount-questions");let I=h.value,S=L.value,p=parseInt(b.value);const K=()=>{localStorage.getItem("difficulty")!==null&&localStorage.getItem("category")!==null&&localStorage.getItem("amount")!==null&&(h.value=JSON.parse(localStorage.getItem("difficulty")||""),L.value=JSON.parse(localStorage.getItem("category")||""),b.value=JSON.parse(localStorage.getItem("amount")||""))};K();const k=()=>{m=10,localStorage.getItem("difficulty")!==null&&localStorage.getItem("category")!==null&&localStorage.getItem("amount")!==null?(I=JSON.parse(localStorage.getItem("difficulty")||""),S=JSON.parse(localStorage.getItem("category")||""),p=parseInt(localStorage.getItem("amount")||"")):(I=h.value,S=L.value,p=parseInt(b.value)),j(),I=h.value,S=L.value,p=parseInt(b.value),V(I,S,p).then(o=>{s=o,c="quiz",y()}),z(),x(),N()},N=()=>{H&&(H.innerHTML=`${r+1}/${s.length}`)},x=()=>{const o=setInterval(()=>{m--,m===0&&(O.play(),r===s.length?(clearInterval(o),c="result",y()):(r++,B(),m=10)),T.innerHTML=`${m}`,r===s.length&&(clearInterval(o),T.innerHTML="last question ;)"),c==="result"&&clearInterval(o)},1e3)};E==null||E.addEventListener("click",k);const B=()=>{if(v&&g&&s){const e=s[r];e.question=J(e.question),v.innerHTML="",v.innerHTML+=`<div class="question">${e.question}</div>`,g&&(g.innerHTML="",g.innerHTML+=A(e)),N()}document.querySelectorAll(".answer-card").forEach(e=>{e.addEventListener("click",l=>{l.target.dataset.type==="true"?(f++,r++,M.play(),console.log(M)):(r++,O.play(),console.log(O)),r<s.length?B():c="result",y(),z(),N(),m=10})})},q=document.getElementById("stop-button");q==null||q.addEventListener("click",()=>{F()});const F=()=>{c="result",Q(),j(),y()},R=o=>{const e=document.getElementById("result");e&&(e.innerHTML="",e.innerHTML+=`<div class="result-text">Je hebt een score van: ${f}/${o}</div> <button class="try-again-button start-button" id="try-again-button">Play another</button>`,f/parseInt(o)>=.5?e.innerHTML+='<img src="src/images/good-job.gif" alt="good job">':e.innerHTML+='<img src="src/images/not-so-good-job.gif" alt="bruh">');const l=document.getElementById("try-again-button");l==null||l.addEventListener("click",()=>{c="settings",Q(),r=0,s=null,f=0,y()})},U=()=>{$()};U();
