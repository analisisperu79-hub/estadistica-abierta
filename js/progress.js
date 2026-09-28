(() => {
const body=document.body;
const course=body.dataset.course;
const topic=body.dataset.topicId;
const total=Number(body.dataset.courseTotal||0);

if(!course||!topic||!total)return;

const key="ea-progress:"+course;

const read=()=>{
  try{
    const value=JSON.parse(localStorage.getItem(key)||"[]");
    return Array.isArray(value)?value:[];
  }catch{
    return [];
  }
};

const write=(items)=>{
  localStorage.setItem(key,JSON.stringify([...new Set(items)]));
};

function render(){
  const completed=read();
  const count=Math.min(completed.length,total);
  const percent=Math.round((count/total)*100);

  document.querySelectorAll("[data-progress-count]").forEach(el=>{
    el.textContent=count;
  });

  document.querySelectorAll("[data-progress-total]").forEach(el=>{
    el.textContent=total;
  });

  document.querySelectorAll("[data-progress-percent]").forEach(el=>{
    el.textContent=percent+"%";
  });

  document.querySelectorAll("[data-progress-bar]").forEach(el=>{
    el.style.width=percent+"%";
  });

  const button=document.querySelector("[data-complete-topic]");
  if(button){
    const done=completed.includes(topic);
    button.classList.toggle("is-complete",done);
    button.textContent=done?"✓ Tema completado":"Marcar tema como completado";
    button.setAttribute("aria-pressed",done?"true":"false");
  }
}

const button=document.querySelector("[data-complete-topic]");

if(button){
  button.addEventListener("click",()=>{
    const completed=read();

    if(completed.includes(topic)){
      write(completed.filter(item=>item!==topic));
    }else{
      write([...completed,topic]);
    }

    render();
  });
}

render();
})();