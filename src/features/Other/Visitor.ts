type NodeVisitor = (node: Node) => VisitorResult<Node>;
type VisitorResult<T extends Node> = T[] | T | undefined;



export default NodeVisitor;