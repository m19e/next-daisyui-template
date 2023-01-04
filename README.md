# Next.js daisyUI Boilerplate

A boilerplate for prototyping with Next.js & daisyUI, which would save your time a lot!

This project is made with...

- Next.js
- TypeScript
- Tailwind CSS
- daisyUI
- Storybook
- husky & lint-staged
- scaffdog

## Sammary of Strength

- Tailwind & Storybook are already set!
- Useful ESlint plugins and rules.
  - Tailwind className sort
  - import order
  - unused import deletion
- Pre-commit hook is also set!
- Scaffdog generates a nice component folder template!

## Structure

Scaffdog will help you a lot. See [here](#scaffdog)!

```zsh
.
├── .husky
├── .scaffdog
├── .storybook
├── public
└── src
    ├── components
    │   ├── templates
    │   ├── organisms
    │   ├── molecules
    │   └── atoms
    ├── pages
    │   └── api
    └── styles
```

## Usage

### Development

You can quickly start development with these commands.

```zsh
# package install
yarn

# start localhost
yarn dev

# start storybook
yarn sb
```

### Scaffdog

Scaffdog help us by generaing a template of project folder.
I already set some commands and the following is a description of those commands. See also [official document of scaffdog](https://github.com/cats-oss/scaffdog#scaffdog).

**Create a new stage (atomic-design component)**

When you create a new stage, use this command at first.

```zsh
yarn sd-gen ac
```

Then, scaffdog will ask you some questions. This is an example of creating Empty component.

```zsh
ℹ Output destination directory: "."
? Please select stage. atom # Choose atom (in atom, molecule, organism, template)
? Please enter a component name. sample

🐶 Generated 1 file!

     ✔ src/components/atoms/Sample.tsx

```

The template which would be generated is [here](https://github.com/m19e/next-daisyui-template/blob/main/.scaffdog/atomic-component.md). You can customize this file.

**Create a new stage with props**

When you create a new stage with props, use this command at first.

```zsh
yarn sd-gen acp
```

Then, scaffdog will ask you some questions. This is an example of creating Empty component.

```zsh
ℹ Output destination directory: "."
? Please select stage. atom # Choose atom (in atom, molecule, organism, template)
? Please enter a component name. sample

🐶 Generated 1 file!

     ✔ src/components/atoms/Sample.tsx

```

The template which would be generated is [here](https://github.com/m19e/next-daisyui-template/blob/main/.scaffdog/atomic-component-with-props.md). You can customize this file.

**Create a new component related to model**

When you create a new component related to model, and...

① when the component describes single of model, use this command at first.

```zsh
npx scaffdog generate mcs
```

Then, scaffdog will ask you some questions. This is an example of creating Student List Component, which is related to Student model.

```zsh
? Please select the output destination directory. . # Choose root(.)
? Which model? student # Enter model name. Multiple words are also fine.
? Plese enter component name student # Enter component name. Multiple words are also fine.

🐶 Generated 3 files!

     ✔ src/components/model/Student/Student/index.ts
     ✔ src/components/model/Student/Student/StudentList.tsx
     ✔ src/components/model/Student/Student/StudentList.stories.tsx


```

② when the component describes list of model, use this command at first.

```zsh
npx scaffdog generate mcl
```

Then, scaffdog will ask you some questions. This is an example of creating Student List Component, which is related to Student model.

```zsh
? Please select the output destination directory. . # Choose root(.)
? Which model? student # Enter model name. Multiple words are also fine.
? Plese enter component name student list # Enter component name. Multiple words are also fine.

🐶 Generated 3 files!

     ✔ src/components/model/Student/StudentList/index.ts
     ✔ src/components/model/Student/StudentList/StudentList.tsx
     ✔ src/components/model/Student/StudentList/StudentList.stories.tsx


```

The template which would be generated is [here](https://github.com/HajimexxxNakagawa/Nextwind-Prototyping-Boilerplate/blob/main/.scaffdog/model-component.md). You can customize this file.

**Create a new page component**

When you create a new page component, use this command at first.

```zsh
npx scaffdog generate pc
```

Then, scaffdog will ask you some questions. This is an example of creating About page component.

```zsh
? Please select the output destination directory. . # Choose root(.)
? Please enter component name about # Enter component name. Multiple words are also fine.

🐶 Generated 4 files!

     ✔ src/components/page/About/index.ts
     ✔ src/components/page/About/Page.tsx
     ✔ src/components/page/About/View.tsx
     ✔ src/components/page/About/About.stories.tsx


```

The template which would be generated is [here](https://github.com/HajimexxxNakagawa/Nextwind-Prototyping-Boilerplate/blob/main/.scaffdog/page-component.md). You can customize this file.

**Create a new ui component**

When you create a new component indifferent to model, use this command at first.

```zsh
npx scaffdog generate uc
```

Then, scaffdog will ask you some questions. This is an example of creating Button component.

```zsh

? Please select the output destination directory. . # Choose root(.)
? Please enter component name button # Enter component name. Multiple words are also fine.

🐶 Generated 2 files!

     ✔ src/components/ui/Button/index.tsx
     ✔ src/components/ui/Button/Button.stories.tsx


```

The template which would be generated is [here](https://github.com/HajimexxxNakagawa/Nextwind-Prototyping-Boilerplate/blob/main/.scaffdog/ui-component.md). You can customize this file.
