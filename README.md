# App Clerk

Aplicación desarrollada con **Next.js** y **Clerk** que permite registrar e iniciar sesión con múltiples proveedores (Google, GitHub, etc). Luego del inicio de sesión, el **dashboard** muestra información detallada del usuario autenticado.

---

## 🚀 Demo

* **Deploy:** [https://app-clerk.netlify.app/](https://app-clerk.netlify.app/)
* **Repositorio:** [https://github.com/Kenkyoo/app-clerk](https://github.com/Kenkyoo/app-clerk)

---

## 🧩 Características principales

* Autenticación con Clerk y varios proveedores (Google, GitHub, Email, etc).
* Páginas protegidas y redirección automática de usuarios no autenticados.
* Integración completa con **App Router** de Next.js.
* Dashboard con datos detallados del usuario.
* Estilos con **Tailwind CSS** y componentes personalizados de Clerk.
* Uso de **hooks** de Clerk para acceder al estado de autenticación y los datos del usuario.

---

## 🛠️ Tecnologías utilizadas

* [Next.js 16](https://nextjs.org/)
* [Clerk](https://clerk.com/)
* [React 19](https://react.dev/)
* [Tailwind CSS 4](https://tailwindcss.com/)
* [DaisyUI](https://daisyui.com/)
* [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/Kenkyoo/app-clerk.git

# Entrar al proyecto
cd app-clerk

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

---

## 🧑‍💻 Descripción técnica

Clerk ofrece una solución completa de autenticación y gestión de usuarios para aplicaciones **React** y **Next.js**. Esta aplicación demuestra:

* Flujo completo de autenticación (registro, inicio y cierre de sesión).
* Personalización de componentes Clerk usando Tailwind.
* Integración de hooks (`useUser`, `useAuth`) para mostrar datos del usuario.

---

## 📂 Estructura básica del proyecto

```
app-clerk/
├── app/              # App Router de Next.js
├── components/       # Componentes reutilizables
├── middleware.ts     # Protección de rutas con Clerk
├── package.json      # Configuración del proyecto
└── tailwind.config.js
```

---

## 📸 Capturas

*(Opcional: agregar imágenes del login y dashboard si lo deseas)*

---

## 📜 Licencia

Proyecto de código abierto bajo la licencia MIT.
