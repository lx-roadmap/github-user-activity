
#### 背景

[GitHub 用户活动 CLI (roadmap.sh)](https://roadmap.sh/projects/github-user-activity)


至少处理 6 种事件：
- `PushEvent`
- `IssuesEvent`
- `IssueCommentEvent`
- `PullRequestEvent`
- `PullRequestReviewEvent`
- `PullRequestReviewCommentEvent`

#### example

dependencies：
```
npm i pkg -g
```

build：
```
npm run build
```

run：
```
./github-activity kamranahmedse
```
or
```
node index.cjs kamranahmedse
```


result：
```
kamranahmedse's recent actions:
- Pushed 15 commits to kamranahmedse/developer-roadmap
- Sended 15 pull requests to kamranahmedse/developer-roadmap
```

