import { mapValues, without } from 'lodash-es'
export interface CommonComponentProps {
  // actions
  actionType: string
  url: string
  // size
  height: string
  width: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  // border type
  borderStyle: string
  borderColor: string
  borderWidth: string
  borderRadius: string
  // shadow and opacity
  boxShadow: string
  opacity: string
  // position and x,y
  position: string
  left: string
  top: string
  right: string
}

export interface TextComponentProps extends CommonComponentProps {
  text: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  textDecoration: string
  lineHeight: string
  textAlign: string
  color: string
  backgroundColor: string
}

export interface ImageComponentProps extends CommonComponentProps {
  src: string
}
export interface ShapeComponentProps extends CommonComponentProps {
  backgroundColor: string
}
export type AllComponentProps = TextComponentProps &
  ImageComponentProps &
  ShapeComponentProps
export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '373px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}
export interface ComponentData {
  props: { [key: string]: any }
  id: string
  name: string
  layerName?: string //图层名称
  isHidden?: boolean // 图层隐藏
  isLocked?: boolean // 图层锁定
}
// 转换成组件props的默认值
export const textDefaultProps: TextComponentProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

export const imageDefaultProps: ImageComponentProps = {
  src: 'test.url',
  ...commonDefaultProps
}

export const shapeDefaultProps: ShapeComponentProps = {
  backgroundColor: '',
  ...commonDefaultProps
}

export const isEditingProps = {
  isEditing: {
    type: Boolean,
    default: false
  }
}

export interface PageData {
  props: { [key: string]: any }
  setting: { [key: string]: any }
  id?: number
  title?: string
  desc?: string
  coverImg?: string
  uuid?: string
  latestPublishAt?: string
  updatedAt?: string
  isTemplate?: boolean
  isHot?: boolean
  isNew?: boolean
  author?: string
  status?: string
}

// 默认props属性 转为 复合vue props格式
export const transformToComponentProps = <T extends {}>(props: T) => {
  const mapProps = mapValues(props, item => {
    return {
      type: (item as any).constructor as StringConstructor,
      default: item
    }
  })
  return { ...mapProps, ...isEditingProps }
}

// text 组件 影响样式的props属性名
export const textStylePropName = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)

export const imageStylePropsName = without(
  Object.keys(imageDefaultProps),
  'src'
)

export const shapeStylePropsName = without(
  Object.keys(shapeDefaultProps),
  'actionType',
  'url'
)
