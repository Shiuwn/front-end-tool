import { ChangeEvent, FC, useState } from "react";
import ColorFormat from "color";
import { Form, Input } from "antd";
import { debounce } from "lodash";

const Color: FC = () => {

  const [form] = Form.useForm<{ rgb: string, hex: string }>()

  const [style, setStyle] = useState({ borderColor: 'auto' })

  const colorChange = (e: ChangeEvent<HTMLInputElement>, type: 'rgb' | 'hex' = 'rgb') => {
    const inputValue = e.target.value
    if (!inputValue) return
    let color: ColorFormat

    try {
      color = ColorFormat(inputValue)
    } catch (e) { }

    // return type === 'rgb' ? color?.toString() : color.hex()
    if (color) {
      const fields = type === 'rgb' ? { rgb: inputValue, hex: color.hex() } : { rgb: color.rgb().toString(), hex: inputValue }
      form.setFieldsValue(fields)
      setStyle({ borderColor: color.toString() })
    }

  }

  const rgbChange = debounce((e: ChangeEvent<HTMLInputElement>) => colorChange(e, 'rgb'))
  const hexChange = debounce((e: ChangeEvent<HTMLInputElement>) => colorChange(e, 'hex'))

  return (
    <div className="tool-container">
      <Form layout="vertical" form={form}>
        <Form.Item label="RGB" name="rgb">
          <Input onChange={rgbChange} style={style} />
        </Form.Item>
        <Form.Item label="Hex" name="hex" >
          <Input onChange={hexChange} style={style} />
        </Form.Item>
      </Form>

    </div>
  )
}

export default Color