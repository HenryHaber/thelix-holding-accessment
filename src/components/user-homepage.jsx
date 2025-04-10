import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card"
import { Badge } from "../component/ui/badge"
import { ShoppingBag, Package, Truck, History } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../component/ui/table"
import {useOrders} from '../../src/components/context/OrderContext';
import {Button} from '../../src/component/ui/button';

export default function HomePage() {
  const {orders} = useOrders()
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <ShoppingBag className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Lifetime purchases</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <Package className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">{orders.length}</span>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total orders placed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Transit</CardTitle>
            <Truck className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Orders in transit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Order History</CardTitle>
            <History className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Months as customer</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const { date_created,total, currency_symbol, status,line_items} = order
                const {address_1, address_2, city, state, country} = order.billing
                const deliveryAddress = `${address_1}  ${address_2}, ${state}  ${country}.`
                const date = new Date(date_created)
                const day = date.getDate(); // 22
                const month = date.getMonth() + 1; // 3
                const year = date.getFullYear(); // 2017
                const product = line_items.map((item) => item.name)

                return (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{product}</TableCell>
                      <TableCell>{day}/{month}/{year}</TableCell>
                      <TableCell>
                        <Badge className={order.status === "completed" ? "bg-green-500" : "bg-blue-500"}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{currency_symbol}{total}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                )})}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

