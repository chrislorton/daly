export enum EButtonVariants {
    primary = 'Primary',
	secondary = 'Secondary',
	danger = 'Danger',
	start = 'Start',
}

export interface IButton {
    id?: string
    variant?: EButtonVariants
}