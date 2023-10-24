# Content Template
Репозиторий-шаблон для других репозиториев с контентом курсов

## Перед началом
> Нужен ли мне новый репозиторий? Может я могу переиспользовать старый?

Вот несколько **стоп-сигналов**, при которых не стоит создавать новый репозиторий:

- Уже есть репозиторий с похожим контентом, который не используется
- Уже есть репозиторий с похожим контентом, но у нас есть возможность использовать отдельный поток под новую версию контента (с тем же типом курса)
-  Планируется создавать новый тип курса, но использовать контент 1-в-1 как на старом

Если сомневаетесь в том, нужно ли вам создавать новый репозиторий - приходите в [#team-dev](https://discord.com/channels/697391843234676736/1082269800186789938), мы подскажем.

## Как создать репозиторий?
1. Нажимаем "Use this template" и выбираем "Create a new repository"
![image](https://github.com/htmlacademy/content-template/assets/4551103/9eccdddf-14c6-4f8e-ab29-acf1b34582f5)
2. В открывшейся форме заполняем название в соответствие с [правилами нейминга](#правила-нейминга-репозиториев), заполняем описание, устанавливаем видимость репозитория в Private и нажимаем "Create repository from template"
![image](https://github.com/htmlacademy/content-template/assets/4551103/ce3c6b7e-8172-46ef-8c82-fe3dccf7cda0)
3. После заполнения и сабмита формы вас направит в созданный репозиторий, с которым можно начинать работу по наполнению его контентом
![image](https://github.com/htmlacademy/content-template/assets/4551103/4e1a0c65-030a-4a4c-bd54-73a8370aae33)

## Локальная работа с контентом
С контентом можно работать локально, для этого необходимо [установить nodejs](https://htmlacademy.ru/blog/js/installing-nodejs).

**Чтобы начать работу:**
1. Клонируем репозиторий к себе в рабочую папку: `git clone <repository-link>`
2. Переходим в локальную папку репозитория и выполняем установку пакетов командой в терминале `npm install`
3. После установки пакетов выполняем команду `npm start`, которая запустит локальную версию контента на `http://localhost:3000`

Документацию по содержимому репозитория с контентом можно найти в [notion](https://www.notion.so/htmlacademy/087de9e56e8848c3a44d03f2e8cf05c9).

## Правила нейминга репозиториев

Название репозитория состоит из префикса, типа курса, для которого он предназначен и опционального постфикса. Например: `course-fe-start`, `intensive-htmlcss`, `profession-frontender-lite`. Для того, чтобы выбрать название конкретного репозитория, определимся, для чего он создается:

|Принадлежность  |Префикс  |Постфикс|
|----------------|---------|--------|
|Маркетинг       |marketing|       -|
|Маркетинг-лайт  |marketing|    lite|
|Мидл-курс       |levelup  |       -|
|Проф-курс       |intensive|       -|
|Университетский |univer   |       -|
|Новичковый и др.|course   |       -|

### Пример #1
Направление лайт-маркетинга планирует провести марафон "Ноябрьский челлендж" и выбрало november-challenge в качестве типа курса. Тогда название репозитория будет: `marketing-november-challenge-lite`

### Пример #2
Направление контента профессий создает новый интенсив про Python (_внезапно_). Тогда название репозитория будет: `intensive-python`