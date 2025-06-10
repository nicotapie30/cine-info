import{g as u,I as h,a as m,d as p}from"./dinamicPagesMovies.CyiXdYnO.js";const c=document.querySelector("#movie"),e=document.querySelector(".list-movie"),f=c.options,s=document.querySelector(".popular-movies"),l=document.querySelector(".container-arrows"),a=document.querySelector(".container-list"),g=document.querySelector(".arrow-left"),v=document.querySelector(".arrow-right"),y=document.querySelector(".button-left"),b=document.querySelector(".button-right"),w=await u();c.addEventListener("change",t=>{const r=t.target.value,d=Array.from(f).find(i=>i.value===r);if(s&&s.classList.add("hidden"),r==="_"&&(e.innerHTML="",s.classList.remove("hidden"),l.classList.add("hidden"),a.classList.remove("h-[31rem]")),d){const i=w.filter(o=>o.genre_ids.includes(parseInt(r)));e.innerHTML="",i.map(o=>{const n=document.createElement("li");n.className="flex justify-center snap-center snap-always",n.setAttribute("aria-label",`Pelicula ${o.title}`),n.innerHTML=`                      
                        <div
                            class="group contenedor relative h-[12rem] w-[9rem] overflow-hidden rounded-lg border border-transparent shadow-md transition-all duration-300 focus-within:border focus-within:border-zinc-400 hover:border hover:border-zinc-400 md:h-[18rem] md:w-[15rem] lg:h-[23rem] lg:w-[18rem]"
                            tabindex="0"
                            >
                            <img
                                src=${h}${o.poster_path}
                                alt="${o.title}"
                                class="contenedor animate-fade-in animate-duration-300 group-hover:mask-fade-name absolute inset-0 h-full w-full rounded-lg transition-all duration-300 group-focus-within:scale-95 group-hover:scale-95"
                                loading="lazy"
                                fetchpriority="low"
                                decoding="async"
                            />
                            <div
                                class="pointer-events-none absolute bottom-2 left-1.5 opacity-0 transition-all group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100"
                            >
                                <span
                                class="text-shadow mb-0.5 block text-xl font-bold text-pretty text-white">${o.title}</span
                                >
                                <a
                                class="pointer-events-auto inline-block cursor-pointer rounded-lg border-2 border-transparent bg-gray-500/50 px-4 py-2 text-white transition-all duration-100 hover:scale-105 hover:border-white hover:bg-gray-600/50 focus:scale-105 focus:border-white focus:bg-gray-600/50"
                                href="/${m(o.title)}"
                                tabindex="0"
                                aria-label="Ver más sobre ${o.title}"
                                >
                                Ver más
                                </a>
                            </div>
                        </div>
      `,e.appendChild(n),l.classList.remove("hidden"),a.classList.add("h-[31rem]")})}else s.classList.remove("hidden"),e.innerHTML="",l.classList.add("hidden"),a.classList.remove("h-[31rem]")});v.addEventListener("click",()=>{const t=e.scrollWidth/e.children.length*2;e.scrollBy({left:t,behavior:"smooth"})});g.addEventListener("click",()=>{const t=e.scrollWidth/e.children.length*2;e.scrollBy({left:-t,behavior:"smooth"})});y.addEventListener("keydown",t=>{if(t.key==="Enter"||t.key===" "||t.key==="ArrowLeft"){const r=e.scrollWidth/e.children.length*2;e.scrollBy({left:-r,behavior:"smooth"})}});b.addEventListener("keydown",t=>{if(t.key==="Enter"||t.key===" "||t.key==="ArrowRight"){const r=e.scrollWidth/e.children.length*2;e.scrollBy({left:r,behavior:"smooth"})}});p();
