module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/portfolio/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Portfolio() {
    const projects = [
        {
            title: 'The Tiger King',
            type: 'Feature Film',
            client: 'Netflix India',
            image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Mumbai Nights',
            type: 'Web Series',
            client: 'Amazon Prime',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Royal Enfield X',
            type: 'Commercial',
            client: 'Ogilvy',
            image: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Desert Storm',
            type: 'Feature Film',
            client: 'YRF',
            image: 'https://images.unsplash.com/photo-1518134346374-184f9d21cea2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            paddingTop: '100px',
            minHeight: '100vh',
            backgroundColor: 'var(--color-black)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: {
                padding: '4rem 5%',
                textAlign: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: '3.5rem',
                        marginBottom: '1rem'
                    },
                    children: "Our Portfolio"
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolio/page.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'var(--color-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '4rem'
                    },
                    children: "Excellence On Screen"
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolio/page.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '2rem'
                    },
                    children: projects.map((proj, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "portfolio-card",
                            style: {
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: proj.image,
                                    alt: proj.title,
                                    style: {
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        display: 'block',
                                        transition: 'transform 0.5s ease'
                                    },
                                    className: "portfolio-img"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portfolio/page.tsx",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        padding: '2rem',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                        textAlign: 'left'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--color-gold)',
                                                fontSize: '0.9rem',
                                                fontWeight: 600,
                                                letterSpacing: '1px',
                                                marginBottom: '0.5rem'
                                            },
                                            children: [
                                                proj.type,
                                                " • ",
                                                proj.client
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/portfolio/page.tsx",
                                            lineNumber: 22,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '1.8rem',
                                                color: 'var(--color-white)'
                                            },
                                            children: proj.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/portfolio/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/portfolio/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/app/portfolio/page.tsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolio/page.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/portfolio/page.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/portfolio/page.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/portfolio/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/portfolio/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7deef44f._.js.map