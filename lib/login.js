module.exports = {
    isLogin:function(req, res) {
        return req.session.is_logined;
    },
    loginStatusUI:function(req, res) {
        let loginStatusUI = '<a href="/users">login</a>';
        if (this.isLogin(req, res)) {
            loginStatusUI = `<b>${req.session.ss_email}</b>님 안녕하세요. | <a href="/users/logout_process">logout</a>`;
        }
        return loginStatusUI;
    }
}