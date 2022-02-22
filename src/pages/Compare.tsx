function Compare({ selectedCardIds, setSelectedCardIds }: {
  selectedCardIds: number[],
  setSelectedCardIds: React.Dispatch<React.SetStateAction<number[]>>
}) {
  return (
    <div>비교하기
      {selectedCardIds}
    </div>
  );
}

export default Compare;

