// let fs = require('fs')

// let DATAPATH = './data.json'
// fs.readFile(DATAPATH, 'utf8', (err_, data) => {
//     data = JSON.parse(data)
//     console.log(new Set(data.map(v => v.type)))
// })

const err = (msg) => {
  msg = msg || 'error'
  console.log(`\x1B[31merror: ${msg}\x1B[37m`)
  // console.log(`\x1B[31m\x1B[41merror: ${msg}\x1B[37m\x1B[40m`)
  process.exit()
}

(async () => {
  const ARGS = process.argv.slice(2)
  
  const URL = `https://api.github.com/users/${ARGS[0]}/events`
  const funcs = {
  }
  const cmd_handler = {
    main: data => {
      let res = {}
      data.forEach(v => {
        if (!res[v.type]) {
          res[v.type] = [v]
        } else {
          res[v.type].push(v)
        }
      })

      console.log(`\x1b[32m${ARGS[0]}'s recent actions:`)
      for (let [k, v] of Object.entries(res)) {
        // (1) PushEvent
        if (k === 'PushEvent') {
          let ans = {}
          v.forEach(w => {
            let repo = w.repo.name
            ans[repo] = ans[repo] ? ans[repo] + 1 : 1
          })
          for (let [k, v] of Object.entries(ans)) {
            console.log(`- Pushed ${v} commits to ${k}`)
          }
        }
        // (2) IssuesEvent
        if (k === 'IssuesEvent') {
          let ans = {}
          v.forEach(w => {
            let repo = w.repo.name
            ans[repo] = ans[repo] ? ans[repo] + 1 : 1
          })
          for (let [k, v] of Object.entries(ans)) {
            console.log(`- Opened ${v} issues in ${k}`)
          }
        }
        // (3) IssueCommentEvent
        if (k === 'IssueCommentEvent') {
          let ans = {}
          v.forEach(w => {
            let repo = w.repo.name
            ans[repo] = ans[repo] ? ans[repo] + 1 : 1
          })
          for (let [k, v] of Object.entries(ans)) {
            console.log(`- Sended ${v} issue comments in ${k}`)
          }
        }
        // (4) PullRequestEvent
        if (k === 'PullRequestEvent') {
          let ans = {}
          v.forEach(w => {
            let repo = w.repo.name
            ans[repo] = ans[repo] ? ans[repo] + 1 : 1
          })
          for (let [k, v] of Object.entries(ans)) {
            console.log(`- Sended ${v} pull requests to ${k}`)
          }
        }
        // (5) PullRequestReviewEvent
        if (k === 'PullRequestReviewEvent') {
          let ans = {}
          v.forEach(w => {
            let repo = w.repo.name
            ans[repo] = ans[repo] ? ans[repo] + 1 : 1
          })
          for (let [k, v] of Object.entries(ans)) {
            console.log(`- Reviewed ${v} pull requests in ${k}`)
          }
        }
        // (6) PullRequestReviewCommentEvent
        if (k === 'PullRequestReviewCommentEvent') {
          let ans = {}
          v.forEach(w => {
            let repo = w.repo.name
            ans[repo] = ans[repo] ? ans[repo] + 1 : 1
          })
          for (let [k, v] of Object.entries(ans)) {
            console.log(`- Sended ${v} pull-request-review comments in ${k}`)
          }
        }
      }
      console.log('\x1b[37m')
    }
  }
  
  if (!ARGS[0]) {
    err('缺少必要的参数 username/organization-name')
  } else {
    
    try {
    fetch(URL)
      .then(res => res.json())
      .then(data => cmd_handler.main(data))
    } catch (e) {
        err(`不存在用户或组织 ${ARGS[0]}，或者请检查网络连接`)
    }
  }
})()

