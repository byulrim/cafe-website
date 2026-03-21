// ==========================================
// DUMMY MENU DATA (Easily editable)
// ==========================================

const menuData = {
  drinks: [
    { id: 1, name: 'Signature Flat White', price: '6,000원', description: 'Our custom blend espresso with perfectly textured velvet milk.' },
    { id: 2, name: 'Vanilla Bean Latte', price: '6,500원', description: 'Smooth latte made with real Madagascar vanilla bean syrup.' },
    { id: 3, name: 'Einspänner', price: '7,000원', description: 'Classic Viennese coffee topped with rich, sweet whipped cream.' },
    { id: 4, name: 'Cold Brew Oat Latte', price: '6,500원', description: '12-hour steeped cold brew mixed with creamy oat milk.' },
    { id: 5, name: 'Grapefruit Ade', price: '7,000원', description: 'Refreshing sparkling water with house-made ruby grapefruit syrup.' },
    { id: 6, name: 'Matcha Cream Latte', price: '7,500원', description: 'Premium organic Jeju matcha with sea salt sweet cream.' }
  ],
  bakes: [
    { id: 1, name: 'Classic Butter Scone', price: '4,500원', description: 'Crumbly butter scone served with clotted cream and strawberry jam.' },
    { id: 2, name: 'Earl Grey Lemon Pound', price: '5,500원', description: 'Moist pound cake infused with Earl Grey tea, topped with lemon icing.' },
    { id: 3, name: 'Salted Caramel Croffle', price: '6,000원', description: 'Crispy croffle drizzled with house-made salted caramel sauce.' },
    { id: 4, name: 'Dark Chocolate Brownie', price: '5,000원', description: 'Fudgy, dense brownie made with 70% dark Belgian chocolate.' },
    { id: 5, name: 'Basque Cheesecake', price: '7,500원', description: 'Creamy crustless cheesecake with a beautifully caramelized top.' }
  ]
};

// Make it available globally for the React app to consume
window.menuData = menuData;
