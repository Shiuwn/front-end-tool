import { Form, Input } from "antd";
import { debounce } from "lodash";
import type { ChangeEvent, FC } from "react";

const URLCode: FC = () => {

  const [form] = Form.useForm<{ raw: string, encoded: string }>()

  const change = (e: ChangeEvent<HTMLTextAreaElement>, type: 'raw' | 'encoded') => {
    const text = e.target.value
    if (!text) return

    if (type === 'raw') {
      form.setFieldsValue({
        raw: text,
        encoded: window.encodeURIComponent(text)
      })
    } else {
      form.setFieldsValue({
        raw: window.decodeURIComponent(text),
        encoded: text
      })
    }

  }

  const rawChange = debounce((e: ChangeEvent<HTMLTextAreaElement>) => {
    change(e, 'raw')
  }, 100)
  const encodedChange = debounce((e: ChangeEvent<HTMLTextAreaElement>) => {
    change(e, 'encoded')
  }, 100)

  return (
    <div className="tool-container">
      <div className="w-9/10">
        <Form form={form} layout="vertical">
          <Form.Item label="Raw" name="raw">
            <Input.TextArea onChange={rawChange} />
          </Form.Item>
          <Form.Item label="Encoded" name="encoded">
            <Input.TextArea onChange={encodedChange} />
          </Form.Item>
        </Form>
      </div>
    </div>

  )
}

export default URLCode