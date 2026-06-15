# Minecraft Field Guide

**Autor:** Tomisss1  
**Předmět:** Webové technologie (2. ročník)  
**Živý web (GitHub Pages):** https://Tomisss1.github.io/2it-web-tomas-korolus/

## Úvod
Tento projekt je moderní, plně optimalizovaná prezentace fungující jako interaktivní encyklopedie pro hru Minecraft. Web přehledně mapuje biomy, monstra (mobs), herní mechaniky a předměty. Projekt byl vyvíjen jako ročníková práce s důrazem na čistotu zdrojového kódu bez použití externích CSS nebo JS frameworků, čímž prokazuje znalost technologií "pod kapotou".

## Použité technologie
* **HTML5:** Sémantická struktura prvků a SEO optimalizace.
* **CSS3:** Pokročilé rozvržení (CSS Grid, Flexbox), plynulé přechody a adaptivní design.
* **Vanilla JavaScript (ES6+):** Dynamické klientské filtrování obsahu pomocí kategorií.
* **Vývojové prostředí:** VS Code, rozšíření Live Server.

## Adresářová struktura
```text
├── index.html          # Hlavní stránka (Průvodce biomů)
├── monsters.html       # Interaktivní bestiář s filtry
├── gameplay.html       # Herní mechaniky a pokročilý pohyb
├── items.html          # Přehled předmětů a výbavy
├── o-projektu.html     # Informace o pozadí vývoje a autorovi
├── style.css           # Hlavní styly, typografie a barevná paleta
├── layout.css          # Rozvržení prvků, mřížky (Grid, Flexbox) a responzivita
├── filter.js           # Čistý JS pro interaktivní filtrování karet monster
├── robots.txt          # Instrukce indexace pro webové roboty
├── sitemap.xml         # Vygenerovaná mapa stránek pro vyhledávače
└── [obrázky.png/webp]  # Optimalizované herní vizuály biomů a monster přímo v kořenu
