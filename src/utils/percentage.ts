interface PercentageProps {
  x: number;
  y: number;
}

export default function percentage(x, y) {
  return 100 / (y / x)
}