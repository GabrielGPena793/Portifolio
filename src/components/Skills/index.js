import React from 'react'
import "./styles.css"

const data = [
    {
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMxXzgxLWphdmEiPjxnPjxwYXRoIGQ9Ik0zMzMuMjgzLDMwNy4xMTdjOC44MDctNi4wMiwyMS4wMjMtMTEuMjMsMjEuMDIzLTExLjIzcy0zNC43NjgsNi4yOS02OS4zNTcsOS4xNjUgICAgYy00Mi4zMTUsMy41MDMtODcuNzc1LDQuMjIxLTExMC41OTUsMS4xNjdjLTUzLjk5Ni03LjE4NywyOS42NDctMjcuMDQ0LDI5LjY0Ny0yNy4wNDRzLTMyLjQzMy0yLjE1NC03Mi40MTMsMTcuMDcgICAgQzg0LjQyMiwzMTkuMDY2LDI0OC4zODMsMzI5LjQ4NywzMzMuMjgzLDMwNy4xMTd6IiBzdHlsZT0iZmlsbDojNTM4MkExOyIvPjxwYXRoIGQ9Ik0yNTYuNTYsMjc4LjI3N2MtMTcuMDctMzguMzYyLTc0LjY1OS03Mi4wNTQsMC0xMzAuOTlDMzQ5LjcyNyw3My43OTcsMzAxLjkzLDI2LDMwMS45MywyNiAgICBjMTkuMzE2LDc1LjkxNy02Ny45Miw5OC45MTctOTkuNDU2LDE0Ni4wODRDMTgxLjAwMSwyMDQuMzM3LDIxMi45ODYsMjM4LjkyNywyNTYuNTYsMjc4LjI3N3oiIHN0eWxlPSJmaWxsOiNGODk4MUQ7Ii8+PHBhdGggZD0iTTM1OS41MTgsMTE5Ljk3NWMwLjA5LDAtMTU3LjQwMywzOS4zNTEtODIuMjA1LDEyNS45NThjMjIuMTkxLDI1LjUxNi01Ljg0LDQ4LjUxNi01Ljg0LDQ4LjUxNiAgICBzNTYuMzMyLTI5LjEwOCwzMC40NTctNjUuNDk1QzI3Ny43NjIsMTk0Ljk5MywyNTkuMjU0LDE3OC4xMDMsMzU5LjUxOCwxMTkuOTc1eiIgc3R5bGU9ImZpbGw6I0Y4OTgxRDsiLz48cGF0aCBkPSJNMzU0LjAzOSwzNjIuOTk5Yy0wLjQ0OSwxLjA3OC0xLjc5NywyLjI0Ny0xLjc5NywyLjMzNiAgICBjMTE1LjI2Ni0zMC4yNzcsNzIuODYxLTEwNi44MjQsMTcuNzg3LTg3LjQxNmMtNC44NTIsMS43MDctNy4zNjUsNS42Ni03LjM2NSw1LjY2czMuMDUzLTEuMjU5LDkuODgzLTIuNjk2ICAgIEM0MDAuMzk2LDI3NS4wNDQsNDQwLjM3NywzMTguMTY4LDM1NC4wMzksMzYyLjk5OUwzNTQuMDM5LDM2Mi45OTl6IiBzdHlsZT0iZmlsbDojNTM4MkExOyIvPjxwYXRoIGQ9Ik0zOTYuNDQzLDQxOC45NzFjMCwwLDEzLjAyNywxMC42OTItMTQuMjg1LDE5LjA0N2MtNTIuMDE4LDE1LjcyMi0yMTYuMzM5LDIwLjQ4My0yNjEuOTc5LDAuNjMgICAgYy0xNi40NDEtNy4wOTksMTQuMzc0LTE3LjA3MiwyNC4wNzgtMTkuMTM3YzEwLjA2MS0yLjE1NywxNS45MDEtMS43OTksMTUuOTAxLTEuNzk5Yy0xOC4yMzgtMTIuODQ3LTExNy45NjMsMjUuMjQ3LTUwLjY3MSwzNi4xMTkgICAgQzI5Mi45NDUsNDgzLjY1Nyw0NDQuMDYxLDQ0MC40NDMsMzk2LjQ0Myw0MTguOTcxTDM5Ni40NDMsNDE4Ljk3MXoiIHN0eWxlPSJmaWxsOiM1MzgyQTE7Ii8+PHBhdGggZD0iTTE5NS41NTcsMzgxLjc3NmMtNzAuNzA2LDE5Ljc2Niw0My4wMzUsNjAuNTU1LDEzMy4wNTUsMjIuMDExICAgIGMtMTQuNzMyLTUuNzQ4LTI1LjMzNC0xMi4zOTctMjUuMzM0LTEyLjM5N2MtNDAuMTYsNy42MzctNTguNzU2LDguMTc1LTk1LjIzMyw0LjA0MyAgICBDMTc3Ljk0OCwzOTIuMDE5LDE5NS41NTcsMzgxLjc3NiwxOTUuNTU3LDM4MS43NzZMMTk1LjU1NywzODEuNzc2eiIgc3R5bGU9ImZpbGw6IzUzODJBMTsiLz48cGF0aCBkPSJNMzU3LjA5Miw0NjkuMTAzYy03MC43MDUsMTMuMjk2LTE1Ny45NDEsMTEuNzcxLTIwOS42MDIsMy4yMzNjMC0wLjA4OCwxMC42MDIsOC43MTYsNjUuMDQ2LDEyLjIyICAgIGM4Mi44MzQsNS4zMDIsMjEwLjA1MS0yLjk2NiwyMTMuMDE2LTQyLjEzNkM0MjUuNTUzLDQ0Mi40Miw0MTkuODAzLDQ1Ny4yNDUsMzU3LjA5Miw0NjkuMTAzTDM1Ny4wOTIsNDY5LjEwM3oiIHN0eWxlPSJmaWxsOiM1MzgyQTE7Ii8+PHBhdGggZD0iTTMxNy45MjIsMzQzLjE0NGMtNTMuMTg4LDEwLjI0My04NC4wMDMsOS45NzMtMTIyLjkwNCw1LjkzICAgIGMtMzAuMDk4LTMuMTQ1LTEwLjQyMi0xNy42OTgtMTAuNDIyLTE3LjY5OGMtNzcuOTgyLDI1Ljg3NCw0My4zMDQsNTUuMTY0LDE1Mi4yODEsMjMuMjY5ICAgIEMzMjUuMjg5LDM1MC42MDEsMzE3LjkyMiwzNDMuMTQ0LDMxNy45MjIsMzQzLjE0NHoiIHN0eWxlPSJmaWxsOiM1MzgyQTE7Ii8+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMSIvPjwvc3ZnPg==",
        nome : "Java",
        descricao: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90.",
        animationTime: "1000",
    },
    {
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjIwNSAxNi4zOTJjLTIuNDY5IDMuMjg5LTcuNzQxIDIuMTc5LTExLjEyMiAyLjMzOCAwIDAtLjU5OS4wMzQtMS4yMDEuMTMzIDAgMCAuMjI4LS4wOTcuNTE5LS4xOTggMi4zNzQtLjgyMSAzLjQ5Ni0uOTg2IDQuOTM5LTEuNzI3IDIuNzEtMS4zODggNS40MDgtNC40MTMgNS45NTctNy41NTUtMS4wMzIgMy4wMjItNC4xNyA1LjYyMy03LjAyNyA2LjY3OS0xLjk1NS43MjItNS40OTIgMS40MjQtNS40OTMgMS40MjRhNS4yOCA1LjI4IDAgMCAxLS4xNDMtLjA3NmMtMi40MDUtMS4xNy0yLjQ3NS02LjM4IDEuODk0LTguMDU5IDEuOTE2LS43MzYgMy43NDctLjMzMiA1LjgxOC0uODI1IDIuMjA4LS41MjUgNC43NjYtMi4xOCA1LjgwNS00LjM0NCAxLjE2NSAzLjQ1OCAyLjU2NSA4Ljg2Ni4wNTQgMTIuMjF6bS4wNDItMTMuMjhhOS4yMTIgOS4yMTIgMCAwIDEtMS4wNjUgMS44OSA5Ljk4MiA5Ljk4MiAwIDAgMC03LjE2Ny0zLjAzMUM2LjQ5MiAxLjk3MSAyIDYuNDYzIDIgMTEuOTg1YTkuOTgzIDkuOTgzIDAgMCAwIDMuMjA1IDcuMzM0bC4yMi4xOTRhLjg1Ni44NTYgMCAxIDEgLjAwMS4wMDFsLjE0OS4xMzJBOS45NiA5Ljk2IDAgMCAwIDEyLjAxNSAyMmM1LjI3OCAwIDkuNjEzLTQuMTA4IDkuOTg0LTkuMjkyLjI3NC0yLjUzOS0uNDc2LTUuNzYzLTEuNzUyLTkuNTk2Ii8+PC9zdmc+",
        nome : "Spring Boot",
        descricao: "O Spring Boot é um framework Java open source que tem como objetivo facilitar esse processo em aplicações Java.",
        animationTime: "1500",
    },
    {
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUzMDUsMCwwLDEuMjUzMDUsLTE2LjMwNzYsNC41NzE5MSkiPjxjaXJjbGUgY3g9IjY0IiBjeT0iNDcuNSIgcj0iOS4zIiBzdHlsZT0iZmlsbDpyZ2IoOTcsMjE4LDI1MSk7Ii8+PHBhdGggZD0iTTY0LDgxLjdDNzEuMyw4OC44IDc4LjUsOTMgODQuMyw5M0M4Ni4yLDkzIDg4LDkyLjYgODkuNSw5MS43Qzk0LjcsODguNyA5Ni42LDgxLjIgOTQuOCw3MC41Qzk0LjUsNjguNiA5NC4xLDY2LjcgOTMuNiw2NC43Qzk1LjYsNjQuMSA5Ny40LDYzLjUgOTkuMiw2Mi45QzEwOS4zLDU5IDExNC45LDUzLjYgMTE0LjksNDcuN0MxMTQuOSw0MS43IDEwOS4zLDM2LjMgOTkuMiwzMi41Qzk3LjQsMzEuOCA5NS42LDMxLjIgOTMuNiwzMC43Qzk0LjEsMjguNyA5NC41LDI2LjggOTQuOCwyNC45Qzk2LjUsMTQgOTQuNiw2LjQgODkuNCwzLjRDODcuOSwyLjUgODYuMSwyLjEgODQuMiwyLjFDNzguNSwyLjEgNzEuMiw2LjMgNjMuOSwxMy40QzU2LjcsNi4zIDQ5LjUsMi4xIDQzLjcsMi4xQzQxLjgsMi4xIDQwLDIuNSAzOC41LDMuNEMzMy4zLDYuNCAzMS40LDEzLjkgMzMuMiwyNC42QzMzLjUsMjYuNSAzMy45LDI4LjQgMzQuNCwzMC40QzMyLjQsMzEgMzAuNiwzMS42IDI4LjgsMzIuMkMxOC43LDM2LjEgMTMuMSw0MS41IDEzLjEsNDcuNEMxMy4xLDUzLjQgMTguNyw1OC44IDI4LjgsNjIuNkMzMC42LDYzLjMgMzIuNCw2My45IDM0LjQsNjQuNEMzMy45LDY2LjQgMzMuNSw2OC4zIDMzLjIsNzAuMkMzMS41LDgwLjkgMzMuNCw4OC41IDM4LjUsOTEuNEM0MCw5Mi4zIDQxLjgsOTIuNyA0My43LDkyLjdDNDkuNSw5Mi45IDU2LjcsODguNyA2NCw4MS43Wk01OC40LDY4LjJDNjAuMiw2OC4zIDYyLjEsNjguMyA2NCw2OC4zQzY1LjksNjguMyA2Ny44LDY4LjMgNjkuNiw2OC4yQzY3LjgsNzAuNiA2NS45LDcyLjggNjQsNzQuOUM2Mi4xLDcyLjggNjAuMiw3MC42IDU4LjQsNjguMlpNNDYsNTcuOUM0Nyw1OS42IDQ3LjksNjEuMiA0OSw2Mi44QzQ1LjksNjIuNCA0Myw2MS45IDQwLjIsNjEuM0M0MS4xLDU4LjYgNDIuMSw1NS44IDQzLjMsNTNDNDQuMSw1NC42IDQ1LDU2LjMgNDYsNTcuOVpNNDAuMiwzMy44QzQzLDMzLjIgNDUuOSwzMi43IDQ5LDMyLjNDNDgsMzMuOSA0NywzNS41IDQ2LDM3LjJDNDUsMzguOSA0NC4xLDQwLjUgNDMuMyw0Mi4yQzQyLDM5LjMgNDEsMzYuNSA0MC4yLDMzLjhaTTQ1LjcsNDcuNUM0Nyw0NC44IDQ4LjQsNDIuMSA1MCwzOS40QzUxLjUsMzYuOCA1My4yLDM0LjIgNTQuOSwzMS42QzU3LjksMzEuNCA2MC45LDMxLjMgNjQsMzEuM0M2Ny4yLDMxLjMgNzAuMiwzMS40IDczLjEsMzEuNkM3NC45LDM0LjIgNzYuNSwzNi44IDc4LDM5LjRDNzkuNiw0Mi4xIDgxLDQ0LjggODIuMyw0Ny41QzgxLDUwLjIgNzkuNiw1Mi45IDc4LDU1LjZDNzYuNSw1OC4yIDc0LjgsNjAuOCA3My4xLDYzLjRDNzAuMSw2My42IDY3LjEsNjMuNyA2NCw2My43QzYwLjgsNjMuNyA1Ny44LDYzLjYgNTQuOSw2My40QzUzLjEsNjAuOCA1MS41LDU4LjIgNTAsNTUuNkM0OC40LDUyLjkgNDcsNTAuMiA0NS43LDQ3LjVaTTg0LjgsNDIuMUw4Mi4xLDM3LjFDODEuMSwzNS40IDgwLjIsMzMuOCA3OS4xLDMyLjJDODIuMiwzMi42IDg1LjEsMzMuMSA4Ny45LDMzLjdDODcsMzYuNSA4NiwzOS4zIDg0LjgsNDIuMVpNODQuOCw1Mi45Qzg2LDU1LjcgODcsNTguNSA4Ny45LDYxLjJDODUuMSw2MS44IDgyLjIsNjIuMyA3OS4xLDYyLjdDODAuMSw2MS4xIDgxLjEsNTkuNSA4Mi4xLDU3LjhDODMsNTYuMyA4My45LDU0LjYgODQuOCw1Mi45Wk04Ny4xLDg3LjZDODYuMyw4OC4xIDg1LjMsODguMyA4NC4yLDg4LjNDNzkuMyw4OC4zIDczLjIsODQuMyA2Ny4yLDc4LjNDNzAuMSw3NS4yIDcyLjksNzEuNyA3NS43LDY3LjhDODAuNCw2Ny40IDg0LjksNjYuNyA4OS4xLDY1LjdDODkuNiw2Ny41IDg5LjksNjkuMyA5MC4yLDcxLjFDOTEuNiw3OS42IDkwLjUsODUuNyA4Ny4xLDg3LjZaTTkyLjMsMzQuOUMxMDMuNSwzOC4xIDExMC4yLDQzIDExMC4yLDQ3LjVDMTEwLjIsNTEuNCAxMDUuNiw1NS4zIDk3LjUsNTguNEM5NS45LDU5IDk0LjEsNTkuNiA5Mi4zLDYwLjFDOTEsNTYgODkuNCw1MS44IDg3LjQsNDcuNUM4OS40LDQzLjIgOTEuMSwzOSA5Mi4zLDM0LjlaTTg0LjMsNi43Qzg1LjQsNi43IDg2LjMsNi45IDg3LjIsNy40QzkwLjUsOS4zIDkxLjcsMTUuMyA5MC4zLDIzLjlDOTAsMjUuNiA4OS42LDI3LjQgODkuMiwyOS4zQzg1LDI4LjQgODAuNSwyNy43IDc1LjgsMjcuMkM3My4xLDIzLjMgNzAuMiwxOS44IDY3LjMsMTYuN0M3My4zLDEwLjggNzkuNCw2LjcgODQuMyw2LjdaTTY5LjYsMjYuOEM2Ny44LDI2LjcgNjUuOSwyNi43IDY0LDI2LjdDNjIuMSwyNi43IDYwLjIsMjYuNyA1OC40LDI2LjhDNjAuMiwyNC40IDYyLjEsMjIuMiA2NCwyMC4xQzY1LjksMjIuMiA2Ny44LDI0LjUgNjkuNiwyNi44Wk00MC45LDcuNEM0MS43LDYuOSA0Mi43LDYuNyA0My44LDYuN0M0OC43LDYuNyA1NC44LDEwLjcgNjAuOCwxNi43QzU3LjksMTkuOCA1NS4xLDIzLjMgNTIuMywyNy4yQzQ3LjYsMjcuNiA0My4xLDI4LjMgMzguOSwyOS4zQzM4LjQsMjcuNSAzOC4xLDI1LjcgMzcuOCwyMy45QzM2LjQsMTUuNCAzNy41LDkuNCA0MC45LDcuNFpNMzUuNyw2MC4xQzI0LjUsNTYuOSAxNy44LDUyIDE3LjgsNDcuNUMxNy44LDQzLjYgMjIuNCwzOS43IDMwLjUsMzYuNkMzMi4xLDM2IDMzLjksMzUuNCAzNS43LDM0LjlDMzcsMzkgMzguNiw0My4yIDQwLjYsNDcuNUMzOC42LDUxLjggMzYuOSw1Ni4xIDM1LjcsNjAuMVpNMzcuOCw3MS4xQzM4LjEsNjkuNCAzOC41LDY3LjYgMzguOSw2NS43QzQzLjEsNjYuNiA0Ny42LDY3LjMgNTIuMyw2Ny44QzU1LDcxLjcgNTcuOSw3NS4yIDYwLjgsNzguM0M1NC44LDg0LjIgNDguNyw4OC4zIDQzLjgsODguM0M0Mi43LDg4LjMgNDEuOCw4OC4xIDQwLjksODcuNkMzNy41LDg1LjcgMzYuNCw3OS42IDM3LjgsNzEuMVoiIHN0eWxlPSJmaWxsOnJnYig5NywyMTgsMjUxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz48L2c+PC9zdmc+",
        nome : "React",
        descricao: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
        animationTime: "2000",
    },
    {
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGlkPSJMYWdlcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PGc+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNTAiIHN0eWxlPSJmaWxsOiNGMERCNEY7Ii8+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMV8xXyI+PGc+PGc+PHBhdGggZD0iTTQ4LjQsNDQuNmg4Ljd2MjQuNWMwLDExLTUuMywxNC45LTEzLjcsMTQuOWMtMi4xLDAtNC43LTAuMy02LjQtMC45bDEtNy4xICAgICAgYzEuMiwwLjQsMi44LDAuNyw0LjUsMC43YzMuNywwLDYtMS43LDYtNy42TDQ4LjQsNDQuNkw0OC40LDQ0LjZ6IiBzdHlsZT0iZmlsbDojMzIzMzMwOyIvPjxwYXRoIGQ9Ik02NC44LDc0LjRjMi4zLDEuMiw2LDIuNCw5LjcsMi40YzQsMCw2LjEtMS43LDYuMS00LjNjMC0yLjQtMS44LTMuOC02LjUtNS40ICAgICAgYy02LjQtMi4zLTEwLjctNS45LTEwLjctMTEuNkM2My40LDQ5LDY5LDQ0LDc4LjEsNDRjNC40LDAsNy42LDAuOSw5LjksMmwtMiw3Yy0xLjUtMC43LTQuMy0xLjgtOC0xLjhjLTMuOCwwLTUuNiwxLjgtNS42LDMuNyAgICAgIGMwLDIuNSwyLjEsMy42LDcuMiw1LjVjNi44LDIuNSwxMCw2LjEsMTAsMTEuNmMwLDYuNS00LjksMTItMTUuNiwxMmMtNC40LDAtOC44LTEuMi0xMS0yLjRMNjQuOCw3NC40eiIgc3R5bGU9ImZpbGw6IzMyMzMzMDsiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+",
        nome : "Javascript",
        descricao: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
        animationTime: "1000",
    },
    {
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBvbHlnb24gZmlsbD0iI0U0NEQyNiIgcG9pbnRzPSIyNy4zNzcsMjguODg5IDE2LjAwMSwzMiA0LjYyNSwyOC44ODkgMiwwIDMwLjAwMiwwICAiLz48cG9seWdvbiBmaWxsPSIjRkY2QzM5IiBwb2ludHM9IjE2LDIgMTYsMjkuNzUgMjUuMjMyLDI3LjAwOCAyNy42ODgsMiAgIi8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNC4zNjMsNiA3LjYwNyw2IDgsMTAgOC42MTksMTcgMTkuNTAzLDE3IDE5LjE0OCwyMC45ODQgMTYsMjEuOTkgMTIuODU3LDIwLjk4NCAxMi42NDgsMTkgICAgOC44MDMsMTkgOS4yNjIsMjMuOTg3IDE2LDI1Ljk5IDIyLjcyOCwyMy45ODYgMjMuNzE4LDEzIDEyLjI1MiwxMyAxMi4wMDIsMTAgMjQsMTAgICIvPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=",
        nome : "HTML",
        descricao: "HTML abreviação para HyperText Markup Language, é uma linguagem de marcação utilizada na construção de páginas na Web.",
        animationTime: "1500",
    },
    {
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBvbHlnb24gZmlsbD0iIzFGNjJBRSIgcG9pbnRzPSIyNy4zNzcsMjguODg5IDE2LjAwMSwzMiA0LjYyNSwyOC44ODkgMiwwIDMwLjAwMiwwICAiLz48cG9seWdvbiBmaWxsPSIjMzQ3REM2IiBwb2ludHM9IjE2LDIgMTYsMjkuNzUgMjUuMjMyLDI3LjAwOCAyNy42ODgsMiAgIi8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNC4zNjMsNiA3LjYwNyw2IDgsMTAgMTYsMTAgOC4yNSwxMi45OSA4LjYxOSwxNyAxOS41MDIsMTcgMTkuMTU4LDIxIDE2LDIxLjk5IDEyLjg2MSwyMC45ODQgICAgMTIuNTMzLDE5IDguODAzLDE5IDkuMjYyLDIzLjk4NyAxNiwyNS45OSAyMi43MjgsMjMuOTg2IDIzLjcxOSwxMi45OSAxNi4wMjYsMTIuOTkgMjQsMTAgICIvPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=",
        nome : "CSS",
        descricao: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
        animationTime: "2000",
    },
]

export default function Skills() {
  return (
    <section id='Habilidades' className='skills container'>
        <h2  data-aos="fade-up">Habilidades</h2>
        <div className='container-skills row row-cols-3 justify-content-center'>
            {
                data.map(({img, nome, descricao, animationTime}, index) =>  
                    <div data-aos="fade-up" data-aos-duration={animationTime} className='col container-skills-data' key={`${index}`}> 
                        <img src={img} alt="tentado aq" />
                        <h3>{nome}</h3>
                        <p>{descricao}</p>
                    </div> )
            }
        </div>

    </section>
  )
}
