from diagrams import Diagram, Edge, Node

with Diagram("My First Diagram", show=False, direction="TB", outformat="svg"):
    node1 = Node("Node 1")
    node2 = Node("Node 2")
    node3 = Node("Node 3")

    connection1 = node1 >> Edge(color="darkgreen") >> node2
    connection2 = node1 >> Edge(color="darkred") >> node3
