# Week20-lesson 1-2	 发布系统

## 无头浏览器
无头浏览器指的是没有图形用户界面的浏览器。

无头浏览器很多，包括但不限于:
- PhantomJS, 基于 Webkit
- SlimerJS, 基于 Gecko
- HtmlUnit, 基于 Rhnio
- TrifleJS, 基于 Trident
- Splash, 基于 Webkit

### lint 与 PhantomJS

lint 是工具链的一个小环节，用来统一团队的代码风格的。前端一般用的是 ESLint。

PhantomJS 是一个「无头浏览器」，与正常浏览器的差别就是不会将页面渲染出来。一般是用来完善 mocha 的单元测试能力，因为 mocha 是不能测试 UI 的。如果没有一个自动化测试工具，就需要我们手动的去测试每个页面，还可能会存在漏侧的情况。

PhantomJS 的用法就是，我们可以得到页面的 DOM 树，然后写代码去对比与我们预期的 DOM 树是不是一致的。

> PhantomJS 不足的地方就是它支持的 Node 版本太低了，并且很多年没有人维护了，会有很多 bug。

### 用处
- Web应用程序中的测试自动化
- 拍摄网页截图
- 对JavaScript库运行自动化测试
- 收集网站数据
- 自动化网页交互

## OAuth
OAuth在"客户端"与"服务提供商"之间，设置了一个授权层（authorization layer）。"客户端"不能直接登录"服务提供商"，只能登录授权层，以此将用户与客户端区分开来。"客户端"登录授权层所用的令牌（token），与用户的密码不同。用户可以在登录的时候，指定授权层令牌的权限范围和有效期。

"客户端"登录授权层以后，"服务提供商"根据令牌的权限范围和有效期，向"客户端"开放用户储存的资料。

### 主体流程

1. 用户打开客户端以后，客户端要求用户给予授权 **Code**。
2. 用户同意给予客户端授权 **Code**。
3. 客户端使用上一步获得的授权 **Code**，向认证服务器申请令牌 **Token**。
4. 认证服务器对客户端进行认证以后，确认无误，同意发放令牌 **Token**。
5. 客户端使用令牌 **Token**，向资源服务器申请获取资源。
6. 资源服务器确认令牌 **Token**无误，同意向客户端开放资源。

### 详细实现

1. 创建 GitHub OAuth App，地址在 https://github.com/settings/apps，主要是要配置 `Homepage URL` 和 `User authorization callback URL`，Webhook 一般不需要用取消这个配置。

2. publish-tool 向 GitHub 发起身份请求。其中 client_id 是上一步创建 App 得到的，具体的做法：https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#1-request-a-users-github-identity。

3. 用户登陆账号，并授权给我们的 GitHub App。然后就会跳转到我们第一步填好的 http://localhost:8081/auth，并且会带上一个 code 参数。http://localhost:8081 这个地址其实就是我们的服务器地址。

4. 处理 /auth 请求。我们在请求的 URL 上能得到用户的 code，通过这个 code 我们就可以来请求用户的 access_token，因此我们需要按照规则给 GitHub 发送一个 HTTPS 的 POST 请求。然后就拿到了用户的 access_token。详细的做法可以看 https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#2-users-are-redirected-back-to-your-site-by-github

5. 将 access_token 通过浏览器传回给 publish-tool，我们这里 server 是给 浏览器返回了一个 a 标签（`<a href="http://localhost:8080/publish?token=${access_token}">publish</a>`）。我们的 publish-tool 有一个 http://localhost:8080 服务，因此用户点击这个链接时，publish-tool 可以得到这个 access_token。

6. tool 给 server 发送请求，access_token 要丢在 headers 里面，并且把代码压缩用流的方式传过去。 

7. server 收到 tool 的请求，并且从 headers 里面拿到了 access_token。将 access_token 传到 GitHub API 请求用户的基本信息。具体做法 https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#3-use-the-access-token-to-access-the-api

8. 验证用户权限。（这个需要配合公司的权限系统）

9. 接收 tool 传过来的代码包，并且解压到目标文件夹（这个一般是线上服务器）。