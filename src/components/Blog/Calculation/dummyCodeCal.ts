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
