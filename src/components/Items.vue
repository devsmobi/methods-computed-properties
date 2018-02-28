<template>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="product in filteredAndSortedItems">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ product.name }}</h5>
            </div>
            <p class="mb-1">{{ product.description }}</p>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Details</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="option in product.options">
                        <td>{{ option.id }}</td>
                        <td>{{ option.details }}</td>
                        <td>{{ option.price }}</td>
                    </tr>
                </tbody>
            </table>
        </a>
    </div>
</template>

<script>

export default {
    name: 'items-component',
    props: ['search-query', 'order-direction'],
    data () {
        return {
            products: [
                {
                    'name': 'USB Stick',
                    'description': 'Lorem ipsum dolor amet sustainable narwhal man braid etsy freegan. Shoreditch slow-carb literally quinoa tbh freegan roof party hoodie photo booth wayfarers. Ennui cornhole post-ironic waistcoat. Poutine authentic vexillologist helvetica gochujang, neutra meggings edison bulb bicycle rights four loko.',
                    'options': [
                        {
                            'id': 1,
                            'details': '16GB',
                            'price': '650'
                        },
                        {
                            'id': 2,
                            'details': '32GB',
                            'price': '1050'
                        },
                        {
                            'id': 3,
                            'details': '64GB',
                            'price': '1650'
                        }
                    ]
                },
                {
                    'name': 'USB Plug',
                    'description': ' Ethical pok pok flannel, cold-pressed poutine messenger bag dreamcatcher wolf brooklyn adaptogen hammock four dollar toast blue bottle gochujang asymmetrical. Poutine food truck hell of palo santo subway tile photo booth post-ironic art party gastropub bitters actually. Selfies pickled try-hard +1 celiac dreamcatcher.',
                    'options': [
                        {
                            'id': 4,
                            'details': 'Micro USB to Type-A',
                            'price': '1000'
                        },
                        {
                            'id': 5,
                            'details': 'Type-C to Type-C',
                            'price': '2000'
                        }
                    ]
                },
                {
                    'name': 'Televisions',
                    'description': 'Chartreuse before they sold out keytar snackwave. Woke put a bird on it narwhal austin thundercats listicle semiotics. Irony etsy cardigan helvetica. Messenger bag lyft XOXO iceland migas cred fixie paleo umami fashion axe. Sriracha salvia kale chips, plaid PBR&B direct trade ennui. Mustache vaporware chartreuse tumeric leggings seitan.',
                    'options': [
                        {
                            'id': 6,
                            'details': 'Samsung 4K UHD 40 inch TV',
                            'price': '75000'
                        },
                        {
                            'id': 7,
                            'details': 'LG OLED Curved 40 inch TV',
                            'price': '300000'
                        },
                        {
                            'id': 8,
                            'details': 'HiSense Full HD 40 inch TV',
                            'price': '55000'
                        },
                        {
                            'id': 9,
                            'details': 'LG HD LED 40 inch TV',
                            'price': '56000'
                        }
                    ]
                },
                {
                    'name': 'Phones',
                    'description': 'Tumblr flannel chia, green juice pork belly farm-to-table blue bottle vegan. Pour-over direct trade cliche meditation. You probably haven\'t heard of them brunch chambray hell of pour-over vexillologist tacos intelligentsia ugh meggings street art tumeric. Live-edge sustainable asymmetrical crucifix, hot chicken tilde lumbersexual.',
                    'options': [
                        {
                            'id': 10,
                            'details': 'Nokia 8 5.3 inch 32GB',
                            'price': '58000'
                        },
                        {
                            'id': 11,
                            'details': 'iPhone 8Plus 5.5 inch 64GB',
                            'price': '120000'
                        },
                        {
                            'id': 12,
                            'details': 'Samsung Galaxy S8 5.8 inch 64GB',
                            'price': '73000'
                        },
                        {
                            'id': 13,
                            'details': 'Huawei Mate 9 Pro 5.5 inch 128GB',
                            'price': '73000'
                        },
                        {
                            'id': 14,
                            'details': 'Huawei Mate 10 5.9 inch 64GB',
                            'price': '75000'
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        filteredAndSortedItems: function() {
            let that = this
            let result = this.products

            // Apply filter first if a search value has been entered
            result = result.filter(function(product) {
                return product.name.indexOf(that.searchQuery) !== -1
            })

            // Sort the remaining values
            return _.orderBy(result, ['name'], [this.orderDirection])
        }
    }
}
</script>

