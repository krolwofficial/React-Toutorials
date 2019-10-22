import checkPropTypes from 'check-prop-types'

export const findByTestAtrr = (wrapper, attr) => {
    const component = wrapper.find(`[data-test="${attr}"]`)
    return component
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component)
    return propsErr
}
