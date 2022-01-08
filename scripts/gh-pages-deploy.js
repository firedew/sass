const { execSync } = require('child_process');
const fs = require('fs');
const folderName = 'docs/dist';

(async () => {
  try {
    execSync('git checkout --orphan gh-pages')

    console.log('Building started...')
    execSync('npm run build')
    execSync(`git --work-tree ${folderName} add --all`)
    execSync(`git --work-tree ${folderName} commit -m gh-pages`)

    console.log('Pushing to gh-pages...')
    execSync('git push origin HEAD:gh-pages --force')
    fs.rmdirSync(folderName, { recursive: true });
    execSync('git checkout -f main')
    execSync('git branch -D gh-pages')
    console.log('Successfully deployed, check your settings')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
