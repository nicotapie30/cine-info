const g="https://api.themoviedb.org/3",w="9eab534326be77caf9f4a0ef4b866705",p=async(t,i={})=>{const a=new URLSearchParams({api_key:w,...i}).toString();try{const e=await fetch(`${g}/${t}?${a}`);if(!e.ok)throw new Error(`Error ${e.status}: ${e.statusText}`);return await e.json()}catch(e){return e}},m={popularMovies:"movie/popular"},{popularMovies:h}=m;async function b(t="es-ES",i={}){const a=[],e=await p(h,{language:t,page:1,...i});if(!e||!e.results)return[];a.push(...e.results);for(let s=2;s<=7;s++){const c=await p(h,{language:t,page:s});c&&c.results&&a.push(...c.results)}return a}const f="https://image.tmdb.org/t/p/original",u=t=>t.toLowerCase().replace(/[^a-z0-9\s-]/gi,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),v=await b(),y=()=>{const t=document.querySelector(".input-search"),i=document.querySelector(".search-movie"),a=document.querySelector(".popular-movies"),e=document.querySelector(".filtered-dinamic-movies"),s=document.querySelectorAll(".link");t.addEventListener("input",r=>{const n=r.target.value.toLowerCase();if(n.length===0){e.innerHTML="",e.classList.add("opacity-0"),i.innerHTML="",a&&a.classList.remove("hidden");return}const d=v.filter(o=>o.title.toLowerCase().includes(n));e.classList.remove("opacity-0"),e.innerHTML=d.map(o=>`          <ul class="w-full h-auto">
                            <button
                            onclick="window.location.href='/${u(o.title)}'" 
                            aria-label="Película ${o.title}">
                              <div
                                class="filtered-link-movies pointer-events-auto w-full h-full inline cursor-pointer rounded-lg bg-transparent text-base text-white transition-all duration-200"
                                > 
                                <li class="flex gap-2 h-full w-full border  border-transparent items-center hover:border hover:border-zinc-300 rounded-lg hover:bg-gray-700/60 hover:scale-105 transition-all duration-200">
                                  <div class="w-full h-full object-center">
                                    <img src=${f}${o.poster_path} class="filtered-img-movies h-full w-auto rounded-lg" />           
                                  </div>
                                  <p class="w-full min-w-[70%]">${o.title}</p>
                                </li>
                              </div>
                            </button>
                          </ul>`).join(""),a.classList.add("hidden"),n.length>0?i.innerHTML=d.map(o=>`
                        <div
                            transition:name="movie"
                            class="group contenedor relative h-[23rem] w-[18rem] overflow-hidden rounded-lg border border-transparent shadow-md transition-all duration-300 focus-within:border focus-within:border-zinc-400 hover:border hover:border-zinc-400"
                            tabindex="0"
                            >
                            <img
                                src=${f}${o.poster_path}
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
                                transition:name="movie-name"
                                class="text-shadow mb-0.5 block text-xl font-bold text-pretty text-white">${o.title}</span
                                >
                                <a
                                class="pointer-events-auto inline-block cursor-pointer rounded-lg border-2 border-transparent bg-gray-500/50 px-4 py-2 text-white transition-all duration-100 hover:scale-105 hover:border-white hover:bg-gray-600/50 focus:scale-105 focus:border-white focus:bg-gray-600/50"
                                href="/${u(o.title)}"
                                tabindex="0"
                                >
                                Ver más
                                </a>
                            </div>
                        </div>
                        `).join(""):(i.innerHTML="",a.classList.remove("hidden"),e.classList.add("opacity-0"))}),document.querySelector(".link-home").addEventListener("click",r=>{r.preventDefault(),window.history.pushState({},"","/"),window.location.reload()}),t.addEventListener("keydown",r=>{if(r.key==="Enter"){r.preventDefault();const l=t.value.toLowerCase();if(l.length>0){const n=v.filter(d=>d.title.toLowerCase().includes(l));n.length>0&&(window.location.href=`/${u(n[0].title)}`,window.addEventListener("popstate",()=>{t.value=""}))}}}),t.addEventListener("keyup",r=>{r.key==="Delete"&&(r.preventDefault(),searchValue.length===0&&e.classList.add("opacity-0"))}),s.forEach(r=>{r.addEventListener("click",l=>{l.preventDefault();const n=r.getAttribute("href");n&&(window.history.pushState({},"",n),window.location.reload())})})};export{f as I,u as a,y as d,b as g};
