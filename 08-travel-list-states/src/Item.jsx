function Item({ item, onItemDelete, onItemCheck }) {
    return (
      <li>
        <input
          type='checkbox'
          value={item.packed}
          onChange={() => onItemCheck(item.id)}
        />
        <span style={item.packed ? { textDecoration: 'line-through' } : null}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onItemDelete(item.id)}>❌</button>
      </li>
    );
  }
export default Item;