export const CodeDummy = {
  language: "python",
  filename: "khoitaotre.py",
  highlightLines: [15, 19],
  code: `from mxnet import init, np, npx
    from mxnet.gluon import nn
    
    npx.set_np()
    
    def getnet():
        net = nn.Sequential()
        net.add(nn.Dense(256, activation='relu'))
        net.add(nn.Dense(10))
        return net
    
    net = getnet()
    
    # Lúc này, các tham số chưa được khởi tạo vì chưa biết kích thước đầu vào
    print(net.collect_params())
    
    x = np.random.uniform(size=(2, 20))
    net(x)  # Khi truyền dữ liệu vào, kích thước tham số được xác định và khởi tạo
    
    print(net.collect_params())`,
};

export const CodeDummy2 = {
  language: "python",
  filename: "khoitaocuongche.py",
  highlightLines: [15, 17],
  code: `from mxnet import init, np, npx
from mxnet.gluon import nn

npx.set_np()

def getnet():
    net = nn.Sequential()
    net.add(nn.Dense(256, activation='relu'))
    net.add(nn.Dense(10))
    return net

net = getnet()

x = np.random.uniform(size=(2, 20))
net(x)  # Khởi tạo tham số lần đầu

# Khởi tạo lại tham số bằng cách cưỡng chế
net.initialize(init=init.Xavier(), force_reinit=True)`,
};

export const DocGhi1 = {
  language: "python",
  filename: "save.py",
  highlightLines: [],
  code: `from mxnet import np, npx
npx.set_np()
x = np.arange(4)
npx.save('x-file', x)`,
};

export const DocGhi2 = {
  language: "python",
  filename: "save.py",
  highlightLines: [],
  code: `x2 = npx.load('x-file')
print(x2)`,
};

export const DocGhi3 = {
  language: "python",
  filename: "save.py",
  highlightLines: [],
  code: `y = np.zeros(4)
npx.save('x-files', [x, y])
x2, y2 = npx.load('x-files')
print(x2, y2)`,
};

export const DocGhi4 = {
  language: "python",
  filename: "save.py",
  highlightLines: [],
  code: `mydict = {'x': x, 'y': y}
npx.save('mydict', mydict)
mydict2 = npx.load('mydict')
print(mydict2)`,
};

export const DocGhiSec1 = {
  language: "python",
  filename: "save.py",
  highlightLines: [2, 3, 7],
  code: `from mxnet.gluon import nn
class MLP(nn.Block):
    def __init__(self, **kwargs):
        super(MLP, self).__init__(**kwargs)
        self.hidden = nn.Dense(256, activation='relu')
        self.output = nn.Dense(10)
    def forward(self, x):
        return self.output(self.hidden(x))
net = MLP()
net.initialize()
x = np.random.uniform(size=(2, 20))
y = net(x)
`,
};

export const DocGhiSec2 = {
  language: "python",
  filename: "save.py",
  highlightLines: [],
  code: `net.save_parameters('mlp.params')`,
};

export const DocGhiSec3 = {
  language: "python",
  filename: "save.py",
  highlightLines: [],
  code: `clone = MLP()
clone.load_parameters('mlp.params')
yclone = clone(x)
print(yclone == y)`,
};
