import { createSshClient } from 'ssh2';

const sshConfig = {
  host: '117.50.178.187',
  port: 22,
  username: 'root',
  password: 'qxf990919',
  // 或者使用密钥认证
  // privateKey: fs.readFileSync('/path/to/your/private/key'),
};

const sshClient = createSshClient();
sshClient
  .on('ready', () => {
    console.log('SSH连接成功');
  })
  .connect(sshConfig);
export default sshClient;

