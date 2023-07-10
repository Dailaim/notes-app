# Sticky Board

Sticky Board es una aplicación interactiva que permite a los usuarios crear, mover y editar notas adhesivas de colores en la pantalla. Es similar a un tablero de corcho físico, pero virtual y más dinámico.

El tablero permite a los usuarios:

- Crear nuevas notas adhesivas (stickies) en la ubicación de su elección en la pantalla.
- Mover las notas adhesivas arrastrándolas a la ubicación deseada.
- Editar el contenido de las notas adhesivas.
- Cambiar el estado arrastrable de las notas adhesivas.
- Borrar las notas adhesivas del tablero.
- Las notas adhesivas persisten incluso después de que la página se haya recargado.

## Tecnologías utilizadas

- Qwik: Un marco de trabajo centrado en la velocidad que se centra en ofrecer la máxima velocidad de interacción del usuario.
- TypeScript: Un lenguaje de programación de código abierto que se basa en JavaScript, una de las herramientas más utilizadas del mundo, al agregar definiciones de tipo estáticas.
- CSS: Lenguaje de hojas de estilo en cascada para describir el aspecto o el formato de un documento escrito en HTML.
- SurrealDB: Una base de datos en tiempo real y sin servidor.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado SurrealDB en tu sistema. Puedes encontrar la guía de instalación en la [página oficial de SurrealDB](https://surrealdb.com).

## Cómo instalar

Para instalar esta aplicación, primero debes clonar el repositorio desde GitHub utilizando el siguiente comando:

```bash
git clone <url del repositorio>
```

A continuación, instala las dependencias necesarias con el comando:

```bash
pnpm install
```

## Modo de desarrollo

Para iniciar la aplicación en modo de desarrollo, necesitas ejecutar dos comandos en paralelo:

```bash
pnpm dev:surreal
pnpm dev
```

## Previsualización

Si deseas previsualizar la aplicación, puedes usar el siguiente comando:

```bash
pnpm preview
```

## Uso

Para usar la aplicación, simplemente haz clic en el signo + de uno de los colores disponibles para crear una nueva nota adhesiva. Para mover la nota, haz clic y arrastra a la ubicación deseada. Puedes editar el contenido de la nota adhesiva haciendo clic en el texto y escribiendo. Para borrar una nota, simplemente haz clic en el icono de la papelera.

Para cambiar el estado arrastrable de una nota adhesiva, haz clic en el icono "🔥" para desactivarlo (se convertirá en "📛") y haz clic de nuevo para reactivarlo.

## Contribuir

Las contribuciones son siempre bienvenidas. Por favor, vea el documento de contribución para obtener más información.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)