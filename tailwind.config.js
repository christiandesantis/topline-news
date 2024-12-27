/* eslint-disable prettier/prettier */
import { addDynamicIconSelectors } from "@iconify/tailwind";
import forms from "@tailwindcss/forms";
import flyonui from "flyonui";
import flyonuiThemes from "flyonui/src/theming/themes";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, flyonui, addDynamicIconSelectors()],
    flyonui: {
        themes: [
            {
                light: {
                    ...flyonuiThemes["light"],
                },
                dark: {
                    ...flyonuiThemes["dark"],
                    background: "rgb(17, 24, 39)",
                    "base-100": "rgb(31, 41, 55)",
                    "--fallback-b3": "rgb(31, 41, 55)",
                },
            },
        ],
    },
    // darkMode: ["class", '[data-theme="dark"]'],
};
