!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var n={board:["","","","","","","","",""]};var o=(()=>{const e=()=>{document.querySelectorAll(".cell").forEach(e=>{const r=e.getAttribute("data-cell");e.innerHTML=n.board[r]})};return window.addEventListener("load",e),{renderBoard:e,renderPlayers:()=>{document.querySelector(".players").innerHTML=`\n    <p>Player 'X': ${c.player1.name} ${c.player1.score} </p>\n    <p>Player 'O': ${c.player2.name} ${c.player2.score}</p>\n    `},renderGameResult:e=>{const r=document.querySelector(".game_result");"win"===e?r.innerHTML=`${c.currentPlayer.name} (${c.currentPlayer.symbol}) wins the game!`:"draw"===e&&(r.innerHTML="It's a Draw!"),r.style.display="block"}}})();var l=(e,r,t)=>({name:e,symbol:r,score:t});const a=(()=>{const e=l("","X",0),r=l("","O",0),t=e,c=e=>{let r=!1;return[0,3,6].forEach(t=>{e[t]===e[t+1]&&e[t]===e[t+2]&&""!==e[t]&&(r=!0)}),[0,1,2].forEach(t=>{e[t]===e[t+3]&&e[t]===e[t+6]&&""!==e[t]&&(r=!0)}),e[0]===e[4]&&e[0]===e[8]&&""!==e[0]&&(r=!0),e[2]===e[4]&&e[2]===e[6]&&""!==e[2]&&(r=!0),r},d=t=>{const l=t.target.getAttribute("data-cell");if(""===n.board[l]){if(n.board[l]=a.currentPlayer.symbol,c(n.board)){a.currentPlayer.score+=1,o.renderGameResult("win"),document.querySelectorAll(".cell").forEach(e=>{e.removeEventListener("click",d)})}else n.board.includes("")?a.currentPlayer=a.currentPlayer===e?r:e:o.renderGameResult("draw")}o.renderBoard(),o.renderPlayers()},u=()=>{const t=document.getElementById("player1_name").value,n=document.getElementById("player2_name").value;e.name=t,r.name=n;const l=document.getElementById("players_form"),a=document.getElementById("board");l.reset(),l.style.display="none",a.style.display="block",o.renderPlayers()},s=()=>{document.querySelector(".game_result").style.display="none",n.board=["","","","","","","","",""],o.renderBoard(),document.querySelectorAll(".cell").forEach(e=>{e.addEventListener("click",d)})};return document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".cell").forEach(e=>{e.addEventListener("click",d)})})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".addPlayers").addEventListener("click",u)})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".startGame");e.addEventListener("click",()=>{document.getElementById("players_form").style.display="block",e.style.display="none"})})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".restartGame").addEventListener("click",s)})),{winCombinations:c,player1:e,player2:r,currentPlayer:t}})();var c=a;(void 0)()}]);