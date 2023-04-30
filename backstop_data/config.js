const scenarios = require('./scenarios')
const isDockerMode = process.argv.includes('--moby')
const needsServer = process.argv.includes('--needs-server')
const baseUrl = isDockerMode && !needsServer ? 'http://host.docker.internal:8080/#/' : 'http://localhost:8080/#/'

if (isDockerMode && needsServer) {
  const server = require('./devServer.js')

  const originalWrite = console.log;
  console.log = function (string) {
    originalWrite(...arguments);

    if (string.indexOf && string.indexOf('Command "test"') > -1) {
      server.close();
    }
  }
}

scenarios.forEach((s) => {
  s.url = `${baseUrl}${s.url}`
})

module.exports = {
  'id': 'firedew_sass',
  'dockerCommandTemplate': 'docker run --rm -it --user $(id -u):$(id -g) --mount type=bind,source="{cwd}",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}',
  'viewports': [
    {
      'label': 'phone',
      'width': 320,
      'height': 480
    },
    {
      'label': 'tablet',
      'width': 1024,
      'height': 768
    }
  ],
  'onBeforeScript': 'playwright/onBefore.js',
  'onReadyScript': 'playwright/onReady.js',
  scenarios,
  'paths': {
    'bitmaps_reference': 'backstop_data/bitmaps_reference',
    'bitmaps_test': 'backstop_data/bitmaps_test',
    'engine_scripts': 'backstop_data/engine_scripts',
    'html_report': 'backstop_data/html_report',
    'ci_report': 'backstop_data/ci_report'
  },
  'report': ['browser'],
  'engine': 'playwright',
  'engineOptions': {
    'args': ['--no-sandbox']
  },
  'asyncCaptureLimit': 5,
  'asyncCompareLimit': 50,
  'debug': false,
  'debugWindow': false
}
