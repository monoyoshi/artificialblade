const components = {
    a: (props) => (
        <a target="_blank" rel="noopener noreferrer" {...props} />
    )
};
 
export function useMDXComponents() {
    return components;
};