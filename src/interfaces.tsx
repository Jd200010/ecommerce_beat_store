export interface BeatTypes {
    id: number,
    title: string,
    price: number,
    quant: number,
    inCart: boolean,
  }

export interface ButtonProps {
  text?: string,
  btnClass?: string,
  cartQuant?: number,
  onClick?: () => void
}

export interface NavbarProps {
  text?: string,
  cartQuant: number
}

export interface BeatButtonProps {
  id: number,
  text: string,
  onClick: (id: number) => any
}

export interface HomeProps {
  beats: BeatTypes[] | null,
  cartQuant: number,
  onAdd: (id: number) => any
}

export interface CartProps {
  beats: BeatTypes[] | null,
  onRemove: (id: number) => any,
  cartQuant: number
}

export interface BeatProps {
  id: number,
  title: string,
  price: number,
  inCart: boolean,
  onAdd?: (id: number) => any,
  onRemove?: (id: number) => any
}

export interface BeatsProps {
  beats: BeatTypes[],
  onAdd?: (id: number) => any,
  onRemove?: (id: number) => any
}