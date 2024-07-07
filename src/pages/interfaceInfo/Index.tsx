import {PageContainer} from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {Button, Card, Descriptions, Divider, Form, Input, message} from "antd";
import {useParams} from "react-router";
import {
  getInterfaceInfoByIdUsingGet,
  invokeInterfaceInfoUsingPost
} from "@/services/xhapi-backend/interfaceInfoController";

const Index: React.FC = () => {
  //定义状态和钩子函数
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfo>([]);
  //使用useParams钩子函数获取动态路由函数
  const params = useParams();
  //存储结果变量
  const [invokeRes, setInvokeRes] = useState<any>();
  //调用加载状态变量，默认false
  const [invokeLoading, setInvokeLoading] = useState(false);

  const loadData = async () => {
    //检查动态路由参数是否存在
    if (!params.id) {
      message.error('参数不存在');
      return;
    }
    setLoading(true);
    try {
      //发起请求获取接口信息，接受一个包含id参数的对象作为参数
      const res = await getInterfaceInfoByIdUsingGet({
        id: Number(params.id),
      });
      //将获取到的接口信息设置到data状态中
      setData(res.data);
    } catch (error: any) {
      message.error('请求失败' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    //页面加载完成后调用加载数据的函数
    loadData();
  },[]);

  const onFinish = async (values: any) => {
    //检查是否存在接口id
    if (!params.id) {
      message.error('接口不存在');
      return;
    }
    //在开始调用接口之前，将invokeLoading设置为true，表示正在加载中
    setInvokeLoading(true);
    try {
      const res = await invokeInterfaceInfoUsingPost({
        id: params.id,
        ...values,
      })
      //将接口调用的结果（res.data)更新到invokeRes状态变量中
      setInvokeRes(res.data);
      message.success('请求成功');
    } catch (error: any) {
      message.error('请求失败');
    }
    //无论成功失败，最后设置为false，表示加载完成
    setInvokeLoading(false);
  };

  return (
    <PageContainer title="查看接口文档">
      <Card>
        {data ? (
          <Descriptions title={data.name} column={1}>
            <Descriptions.Item label="接口状态">{data.status ? '开启' : '关闭'}</Descriptions.Item>
            <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
            <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
            <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
            <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
            <Descriptions.Item label="响应头">{data.requestResponse}</Descriptions.Item>
            <Descriptions.Item label="请求参数">{data.requestParams}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
            <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
          </Descriptions>
        ) : (
          <>接口不存在</>
        )}
      </Card>
      <Divider />
      <Card title="在线测试">
        <Form
          name="invoke"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="请求参数"
            name="userRequestParams">
          <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title="返回结果" loading={invokeLoading}>
        {invokeRes}
      </Card>
    </PageContainer>
  );
};

export default Index;
