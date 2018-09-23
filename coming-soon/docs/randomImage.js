function addStyleString(str) {
  var node = document.createElement('style')
  node.innerHTML = str
  document.body.appendChild(node)
}

const dictionary = [
  'http://i.pravatar.cc/300?img=1',
  'http://i.pravatar.cc/300?img=2',
  'http://i.pravatar.cc/300?img=3',
  'http://i.pravatar.cc/300?img=4',
  'http://i.pravatar.cc/300?img=5',
  'http://i.pravatar.cc/300?img=6',
  'http://i.pravatar.cc/300?img=7',
  'http://i.pravatar.cc/300?img=8',
  'http://i.pravatar.cc/300?img=9',
  'http://i.pravatar.cc/300?img=10'
]

let url = dictionary[Math.floor(Math.random()*dictionary.length)]

addStyleString(
  `.cover-main img { content: url(${url}) }`
)
// addStyleString('body { background: silver }');
// This way allows you to add CSS in multiple passes

// content: url('https://assets.pernod-ricard.com/uk/media_images/test.jpg');
