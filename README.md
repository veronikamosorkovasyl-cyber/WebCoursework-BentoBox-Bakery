# St. Gentleman — лендінг пекарні на Bento Grid

Адаптивний лендінг вигаданої пекарні **St. Gentleman** (Brooklyn, NY), створений у рамках курсової роботи на тему
**«Розробка лендінгу з бенто-сіткою (Bento Grid) на CSS Grid»**.

🔗 **Демо:** https://stgentlemanbakery.netlify.app/
🎨 **Макет у Figma:** https://www.figma.com/design/R8qKl2nZtnVt3FJZl1go0v/Figma-basics?node-id=2604-157&t=y3UasWB2a0Vqss4x-1

<img width="1626" height="950" alt="site photo" src="https://github.com/user-attachments/assets/2ff0218d-29fc-4cec-8f94-286a906303cc" />

## Про проєкт

Мета — показати, як за допомогою **чистого HTML + CSS (Grid, Flexbox, custom properties)** без фреймворків побудувати
сучасний лендінг із розкладкою у стилі *bento*: контент розбито на «картки» різного розміру, які разом утворюють
єдину сітку.

Що демонструє проєкт:

- bento-розкладку на **CSS Grid** з іменованими областями (`grid-template-areas`);
- адаптивність за схемою **4 → 2 → 1 колонка**;
- дизайн-токени у CSS-змінних (кольори, шрифти, відступи, радіуси);
- семантичну верстку та базову доступність (a11y);
- мобільне бургер-меню на невеликому JavaScript.

## Технології

| Технологія | Навіщо |
|---|---|
| HTML5 | семантична розмітка (`header`, `nav`, `main`, `section`, `address`, `footer`) |
| CSS3 (Grid, Flexbox) | розкладка сторінки та компонентів |
| CSS Custom Properties | дизайн-токени у `tokens.css` |
| Vanilla JavaScript | відкриття/закриття мобільного меню |
| Google Fonts | Playfair Display (заголовки), Source Sans 3 (текст) |
| Figma | прототип і дизайн-система |

## Структура проєкту

```
.
├── index.html
├── css/
│   ├── tokens.css       # змінні: кольори, шрифти, розміри, відступи
│   ├── base.css         # reset, типографіка, focus-стилі
│   ├── grid.css         # bento-сітка та медіазапити
│   └── components.css   # card, btn, nav, menu, coffee, find-us, footer
├── js/
│   └── script.js        # бургер-меню
├── imgs/
│   ├── Logo.svg
│   ├── menu.svg
│   ├── KatsuSand.webp
│   └── Crossanncoffee.webp
└── README.md
```

Порядок підключення CSS важливий: `tokens → base → grid → components`.

## Bento-сітка

Основна сітка описана у `css/grid.css` і складається з 4 колонок з іменованими областями:

```css
.bento__main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--gap);
    grid-template-areas:
        "intro  intro  intro  intro"
        "menu   menu   coffee coffee"
        "about  about  about  about";
}
```

### Адаптивність

| Ширина екрана | Колонок | Розкладка |
|---|---|---|
| ≥ 1024 px | 4 | `intro` на всю ширину; `menu` + `coffee` по два стовпці; `about` на всю ширину |
| 600–1023 px | 2 | `intro`; `menu` і `coffee` поруч; `about` |
| ≤ 599 px | 2 → стек | картки та внутрішній вміст перебудовуються в одну колонку, з'являється бургер-меню |

## Блоки сторінки

1. **Header / Nav** — логотип, навігація, кнопка «Explore our bakes».
2. **Intro** — головний заголовок, підзаголовок і фото Katsu Sandwich.
3. **Menu** — «Daily line up»: три позиції з цінами.
4. **Coffee** — карточка з фоновим фото та посиланням на каву.
5. **Find us** — адреса, години роботи, кнопка «Find us».
6. **Footer** — бренд, Instagram, email, копірайт.

## Дизайн-система

Усі значення зібрані у `css/tokens.css`:

| Токен | Значення | Призначення |
|---|---|---|
| `--color-bg` | `#F5EFEC` | фон сторінки |
| `--color-paccent` | `#BA3838` | основний акцент, фон карток |
| `--color-saccent` | `#652121` | другий акцент, картка меню, focus |
| `--color-text` | `#222222` | текст |
| `--font-display` | Playfair Display | заголовки, ціни |
| `--font-body` | Source Sans 3 | основний текст |
| `--gap` | `16px` (12px на мобільних) | відстань між картками |
| `--radius-card` | `28px` (20px на мобільних) | заокруглення карток |
| `--page-max-width` | `1280px` | максимальна ширина контенту |

## Запуск локально

Проєкт статичний — збірка не потрібна.

**Варіант 1.** Відкрити `index.html` у браузері.

**Варіант 2.** Запустити локальний сервер:

```bash
# Python
python -m http.server 8000

# або Node.js
npx serve .
```

Після цього відкрийте <http://localhost:8000>.

## Доступність і якість

- семантичні теги та осмислені `alt` для зображень;
- `aria-label`, `aria-expanded`, `aria-controls` для кнопки меню;
- видимий `:focus-visible` для навігації з клавіатури;
- шрифти підключені з `preconnect` та `display=swap`;
- зображення у форматі WebP.

Перевірка (заповни після тестування):

| Інструмент | Результат |
|---|---|
| Lighthouse (Performance / Accessibility / Best Practices / SEO) | 95+/95+/80+/100 |
| W3C HTML / CSS validator | ✔ |
| Перевірка на 360 / 768 / 1280 px | ✔ |

## Підтримка браузерів

CSS Grid і custom properties підтримуються у всіх сучасних браузерах: Chrome, Edge, Firefox, Safari (останні версії).

## Публікація

Сайт можна розгорнути на **Netlify** (drag & drop папки проєкту або підключення GitHub-репозиторію) чи **GitHub Pages**
(*Settings → Pages → Deploy from branch → `main` / root*).

## Плани розвитку

- [ ] перенесення на React (Vite) із розбиттям на компоненти;
- [ ] сторінка повного меню;
- [ ] легкі анімації карток (hover, поява при скролі).

## Автор

Студентка групи **31 КН**, курсова робота «Розробка лендінгу з бенто-сіткою (Bento Grid) на CSS Grid».
Рік: 2026.

## Ліцензія

Навчальний проєкт. Зображення та логотип використовуються лише в навчальних цілях.
