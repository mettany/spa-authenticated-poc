module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "quotes": ["error", "double"],
        "no-unused-vars": "off",
        "semi": ["error", "always"]
    }
};
